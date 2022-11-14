"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_login_login_module_ts"],{

/***/ 18447:
/*!*****************************************************!*\
  !*** ./src/app/admin/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 87159);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 65961:
/*!*********************************************!*\
  !*** ./src/app/admin/login/login.module.ts ***!
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
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 18447);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 87159);







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

/***/ 87159:
/*!*******************************************!*\
  !*** ./src/app/admin/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 32413);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 30017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/util.service */ 19915);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);









 // import { send } from 'process';


 // import {} from ''



let LoginPage = class LoginPage {
  constructor(router, fireauth, api, initUser, navCont, util, firestore, authentication) {
    this.router = router;
    this.fireauth = fireauth;
    this.api = api;
    this.initUser = initUser;
    this.navCont = navCont;
    this.util = util;
    this.firestore = firestore;
    this.authentication = authentication;
    this.user = {
      email: '',
      password: ''
    };
    this.forgetpass = false;
    this.backlog = true;
  }

  ngOnInit() {} // public createAccount(email: string, password: string): Promise<any> {
  //   return new Promise<any>((resolved, rejected) => {
  //     this.fireauth.createUserWithEmailAndPassword(email, password)
  //       .then(res => {
  //         if (res.user) {
  //           console.log(res.user)
  //           resolved(res.user);
  //         } else {
  //           rejected(res);
  //         }
  //       })
  //       .catch(err => {
  //         rejected(err);
  //       });
  //   });
  // }


  moveTo() {
    var _this = this;

    // this.createAccount(this.user.email, this.user.password).then(user=>{
    //   console.log('user',user)
    // })
    this.authentication.login(this.user.email, this.user.password).then(res => {
      console.log(res);
      console.log(res.uid);
      this.api.loginUserId = res.uid;
      console.log(this.api.loginUserId);
      const pass = {
        password: this.user.password
      };
      this.firestore.update('admin', res.uid, pass).then(res => {
        console.log(res);
      });
      this.router.navigate(['admin/home']);
      this.initUser.setToken(res.uid);
      this.api.getUser().subscribe(user => {
        console.log('user name', user);
        console.log('res', user.id, res.uid); // if(user.id === res.uid){

        this.initUser.setLoggedInAdmin(user);
        this.loggedinUser = this.initUser.getUserData();
        console.log(this.loggedinUser); // }else{
        //   this.api.getAdminUser().subscribe(adminadd=>{
        //     console.log('user name', adminadd)
        //     console.log('adminadd',adminadd, adminadd.name)
        //     this.initUser.setLoggedInAdmin(adminadd)
        //     this.loggedinUser = this.initUser.getUserData()
        //     console.log(this.loggedinUser)
        //   })
        // }
        // res.map(user=>{
        // console.log('user name', user.name)
        // console.log('user name', user)
        // })
        // this.adminUser.push(res)
      });
    }, /*#__PURE__*/function () {
      var _ref = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        //await laoder.dismiss();
        const toast = yield _this.api.createToast('Invalid AdminID or Password', false, 'top');
        yield toast.present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    console.log(this.user.email, this.user.password);
  }

  resetpass() {
    // const email = new email.send()
    // this.api.getSchHistory(this.user.email).subscribe(user=>{
    //   console.log(user)
    //   user.map(res=>{
    //     this.temPassword = res.temporary_password
    //     console.log(res.temporary_password)
    //   })
    // })
    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "lilypackiyam@gmail.com",
    //     Password : "0527721E803854F2C924B66A3BAEAE2A03B2",
    //     // To : document.getElementById('requestEmail').value,
    //     To : this.user.email,
    //     From : 'lilypackiyam@gmail.com',
    //     Subject : "This is the subject",
    //     Body : `${'we have created a new admin account for you.Here is the link to activate the account.'}
    //              userName : ${this.user.email},
    //              password : ${this.temPassword}
    //              `,
    // }).then(message =>{
    //   alert('message sent')
    //   console.log(message)
    // })
    // this.fireauth.sendPasswordResetEmail(this.user.email, {url:'http://localhost:8100/pages/login',handleCodeInApp: false}).then(res =>{
    //   console.log(res)
    // })
    // this.authentication.forgotPassoword(this.user.email)
    // this.authentication.verificationCode(this.user.email)
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();
    const user = auth.currentUser;
    console.log(auth, user);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.updatePassword)(user, this.temPassword).then(res => {
      console.log(res);
    });
    this.forgetpass = false;
    this.backlog = true;
  }

  forgetpassword() {
    this.util.goForward('admin/password');
  }

  backlogin() {
    var _this2 = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.backlog = true;
      _this2.forgetpass = false; // const toast = await this.api.createToast('Link sent your email, please check the spam folder in your mail', false, 'top');
      //   await toast.present();
    })();
  }

  moveToLog() {
    this.router.navigate(['admin/signup']);
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__.InituserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
}, {
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_7__.UtilService
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_8__.FirestoreService
}, {
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthenticationService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 30017:
/*!********************************************************!*\
  !*** ./src/app/admin/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 32413:
/*!********************************************************!*\
  !*** ./src/app/admin/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"6\" class=\"content1\">\n        <ion-label class=\"menu\" (click)=\"moveToLog()\">SignUp</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\" (click)=\"forgetpassword()\">Forget Password</ion-label>\n        <!-- <ion-label class=\"menu\" (click)=\"backlogin()\">back login</ion-label> -->\n        <br>\n        <br>\n      </ion-col>\n      <ion-col size=\"6\" class=\"content2\">\n        <h4 style=\"\">Welcome to the SES Vendor Management website!</h4>\n        <br>\n        <br>\n        <h4 style=\"\">Please enter your administration login and password.</h4>\n        <!-- <h4 style=\"\" *ngIf=\"!backlog\">Please enter your Email.</h4> -->\n        <br>\n<div class=\"login\" style=\"margin-top: 2px;\">\n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n Admin ID:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input type=\"email\" class=\"input\" [(ngModel)]=\"user.email\"></ion-input>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n Password:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-input class=\"input\" type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n    </ion-col>\n  </ion-row>\n \n  \n \n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;width: 500px;\">\n    <ion-col size=\"8\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Login\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</div>\n\n</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">  \n  \n  <ion-slide>  \n    <img src=\"assets/jtp_logo.png\"/>  \n    <h2>Welcome to the <b>JavaTpoint</b></h2>  \n    <p>JavaTpoint offers Corporate Training, Summer Training, Online Training and Winter Training on Java, Android, Python, Oracle, PHP, and many more technologies.</p>  \n  </ion-slide>  \n\n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide> \n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide>   \n  </ion-slides>-->\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_login_login_module_ts.js.map