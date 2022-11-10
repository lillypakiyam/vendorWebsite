"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 90392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 64374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 17110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 90392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 64374);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 64374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 45722);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 62124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);







let SignupPage = class SignupPage {
    constructor(fireauth, authen, router) {
        this.fireauth = fireauth;
        this.authen = authen;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    createAccount(email, password) {
        return new Promise((resolved, rejected) => {
            this.fireauth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                if (res.user) {
                    console.log(res.user);
                    console.log(res.user.uid);
                    resolved(res.user);
                }
                else {
                    rejected(res);
                }
            })
                .catch(err => {
                rejected(err);
            });
        });
    }
    moveTo() {
        this.createAccount(this.user.email, this.user.password).then(user => {
            console.log('user', user);
        });
        this.router.navigate(['admin/home']);
        console.log(this.user.email, this.user.password);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseAuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 62124:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".header {\n  min-height: 100px;\n  background-image: linear-gradient(to right, hsl(319deg, 64%, 58%), hsl(206deg, 68%, 61%));\n}\n\n.img {\n  height: 99px;\n  margin-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 80%;\n}\n\n.menu {\n  color: black;\n}\n\n.menu:hover {\n  color: hsl(319deg, 64%, 58%);\n}\n\n.footer {\n  min-height: 50px;\n  background-image: linear-gradient(to right, hsl(319deg, 64%, 58%), hsl(206deg, 68%, 61%));\n}\n\n.icon {\n  height: 25px;\n  width: 25px;\n  padding-left: 10px;\n}\n\n.back {\n  background: #d9d9ff;\n}\n\n.wholeclass {\n  background: rgb(252, 250, 250);\n}\n\n.input {\n  border: 1px solid lightgray;\n}\n\n.btnLogin {\n  --background: lightgray;\n  color: black;\n  border: 1px solid grey;\n  border-radius: 1px;\n}\n\n.content1 {\n  flex-wrap: nowrap;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.content2 {\n  flex-wrap: nowrap;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHlGQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSw0QkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSx5RkFBQTtBQUtKOztBQUZFO0VBQ0UsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtBQU83Qjs7QUFMQTtFQUNJLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSw4QkFBQTtBQVNKOztBQVBBO0VBQ0ksMkJBQUE7QUFVSjs7QUFSQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBYUoiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxoc2woMzE5LCA2NCwgNTgpLGhzbCgyMDYsIDY4LCA2MSkpO1xuICB9XG4uaW1ne1xuICAgIGhlaWdodDogOTlweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MCU7XG59XG4ubWVudXtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4ubWVudTpob3ZlcntcbiAgICBjb2xvcjogaHNsKDMxOSwgNjQsIDU4KTtcbn1cbi5mb290ZXIge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LGhzbCgzMTksIDY0LCA1OCksaHNsKDIwNiwgNjgsIDYxKSk7XG4gICAgXG4gIH1cbiAgLmljb257XG4gICAgaGVpZ2h0OiAyNXB4O3dpZHRoOiAyNXB4O3BhZGRpbmctbGVmdDogMTBweDtcbn1cbi5iYWNre1xuICAgIGJhY2tncm91bmQ6ICNkOWQ5ZmY7XG59XG4ud2hvbGVjbGFzc3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTAsIDI1MCk7XG59XG4uaW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLmJ0bkxvZ2lue1xuICAgIC0tYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cbi5jb250ZW50MXtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmNvbnRlbnQye1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59Il19 */";

/***/ }),

/***/ 45722:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"6\" class=\"content1\">\n      \n        <ion-label class=\"menu\" (click)=\"moveToLog()\">Login</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\">Forget Password</ion-label>\n        <br>\n        <br>\n      </ion-col>\n      <ion-col size=\"6\" class=\"content2\">\n    \n        <h4 style=\"\">Welcome to the SES Vendor Management website!</h4>\n        <br>\n        <br>\n<h4 style=\"\">Please enter your administration login and password.</h4>\n<br>\n<div class=\"login\" style=\"margin-top: 2px;\">\n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n Admin ID:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" [(ngModel)]=\"user.email\"></ion-input>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" [(ngModel)]=\"user.password\"></ion-input>\n    </ion-col>\n  </ion-row>\n \n\n \n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;width: 500px;\">\n    <ion-col size=\"8\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Login\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n\n</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">  \n  \n  <ion-slide>  \n    <img src=\"assets/jtp_logo.png\"/>  \n    <h2>Welcome to the <b>JavaTpoint</b></h2>  \n    <p>JavaTpoint offers Corporate Training, Summer Training, Online Training and Winter Training on Java, Android, Python, Oracle, PHP, and many more technologies.</p>  \n  </ion-slide>  \n\n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide> \n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide>   \n  </ion-slides>-->\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map