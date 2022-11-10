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
/* harmony import */ var D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-info.page.html?ngResource */ 4891);
/* harmony import */ var _login_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-info.page.scss?ngResource */ 27302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ 23628);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/firestorage.service */ 39319);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 99439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/util.service */ 19915);















let LoginInfoPage = class LoginInfoPage {
  constructor(router, api, initUser, authentication, firestore, alert, loadCnt, util, fileOpener, storage, Aroute) {
    this.router = router;
    this.api = api;
    this.initUser = initUser;
    this.authentication = authentication;
    this.firestore = firestore;
    this.alert = alert;
    this.loadCnt = loadCnt;
    this.util = util;
    this.fileOpener = fileOpener;
    this.storage = storage;
    this.Aroute = Aroute;
    this.textarea = false;
    this.taxDetails = []; // this.Aroute.queryParams.subscribe(()=>
    // {

    this.data = this.router.getCurrentNavigation().extras.state.item;
    console.log(this.data); // })

    this.data['tax_Details'].forEach(tax => {
      // console.log('details', tax);
      this.taxDetails.push(tax);
    });
    console.log('details', this.taxDetails);
    console.log('details', this.data);
    this.password = this.data.Confirm_new_password !== null ? this.data.Confirm_new_password : this.data.temprory_password; // console.log('details', this.data['tax_Details']);

    this.loggedinUser = this.initUser.getUserData();
    console.log(this.loggedinUser);
  }

  ngOnInit() {}

  showtextarea() {
    var _this = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loggedinUser.manageAdmin === 'Y') {
        _this.textarea = !_this.textarea;
      } else {
        const toast = yield _this.api.createToast('you are not allowed', false, 'middle');
        yield toast.present();
      }
    })();
  }

  sendVendorEmail() {
    // const email = new email.send()
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "vendordeveloper22@gmail.com",
      Password: "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
      // To : document.getElementById('requestEmail').value,
      To: this.data.requestEmail,
      From: 'vendordeveloper22@gmail.com',
      Subject: "vendor account",
      Body: `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 temprory Id : ${this.data.temporaryId},
                 password : ${this.password}
                 description: ${this.message}
                 `
    }).then(message => {
      // alert('message sent')
      this.loading();
      console.log(message);
      this.textarea = false; // this.router.navigate(['admin/vendor-info'])
    });
  }

  sendCompletion() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "vendordeveloper22@gmail.com",
      Password: "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
      // To : document.getElementById('requestEmail').value,
      To: this.data.requestEmail,
      From: 'vendordeveloper22@gmail.com',
      Subject: "Reminder message!!",
      Body: `please complete your remaining steps
               Link: 'https://vendorweb-f72c9.web.app/pages/login',
               temprory Id : ${this.data.temporaryId},
               password : ${this.password}
               `
    }).then(message => {
      // alert('message sent')
      this.loading();
      console.log(message); // this.textarea =false
      // this.router.navigate(['admin/vendor-info'])
    });
  }

  approveDetail() {
    var _this2 = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this2.password);
      _this2.alertc = yield _this2.util.createAlert('', false, `Do you want to approved?`, {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: function () {
          var _ref = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this2.alert.dismiss();
          });

          return function handler() {
            return _ref.apply(this, arguments);
          };
        }()
      }, {
        text: 'Yes',
        handler: function () {
          var _ref2 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this2.alert.dismiss(); //  navigator['app'].exitApp();
            // console.log(items)

            if (_this2.loggedinUser.manageAdmin === 'Y') {
              _this2.authentication.login(_this2.data.temporaryId + '@gmail.com', _this2.password).then(use => {
                console.log(use);

                _this2.createPass();
              }).catch( /*#__PURE__*/function () {
                var _ref3 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
                  console.log(err);
                  const toast = yield _this2.api.createToast('already approved in this vendorId', false, "middle");
                  yield toast.present();
                });

                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }());
            } else {
              const toast = yield _this2.api.createToast('you are not allowed', false, 'middle');
              yield toast.present();
            }
          });

          return function handler() {
            return _ref2.apply(this, arguments);
          };
        }()
      });
      yield _this2.alertc.present();
    })();
  }

  createPass() {
    var _this3 = this;

    var random_id = ''; // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var characters = '1234567890';

    for (var i = 0; i < 10; i++) {
      random_id += characters.charAt(Math.floor(Math.random() * characters.length));
      this.numberId = random_id;
      console.log(this.numberId);
    }

    this.emailId = this.numberId + "@gmail.com";
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();
    const user = auth.currentUser;
    console.log(auth, user);
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.updateEmail)(user, this.emailId).then( /*#__PURE__*/function () {
      var _ref4 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log(res);
        const permenant = {
          permenantId: _this3.numberId,
          approved: true
        }; // this.router.navigate(['pages/vendor-profile'])

        _this3.firestore.update('vendorAdd', _this3.data.id, permenant).then(data => {
          console.log(data);
        });

        _this3.sendPermenantEmail();

        const toast = yield _this3.api.createToasts('approved in this vendorId', false, "middle");
        yield toast.present();
      });

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref5 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        console.log(err);
        const toast = yield _this3.api.createToast('already approved in this vendorId', false, "middle");
        yield toast.present();
      });

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
  }

  loading() {
    var _this4 = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this4.loadCnt.create({
        message: 'Message sending...',
        duration: 3000,
        spinner: 'circles'
      });
      load.present();
    })();
  }

  sendPermenantEmail() {
    // const email = new email.send()
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "vendordeveloper22@gmail.com",
      Password: "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
      // To : document.getElementById('requestEmail').value,
      To: this.data.requestEmail,
      From: 'vendordeveloper22@gmail.com',
      Subject: "vendor account",
      Body: `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 permanent Id : ${this.numberId},
                 password : ${this.password}
                 `
    }).then(message => {
      alert('message sent');
      console.log(message);
      this.router.navigate(['admin/vendor-info']);
    });
  }

  Downloadbank(data) {
    console.log(data);
    window.open(data.document);
  }

  DownloadTax(data) {
    console.log(data);
    window.open(data.Taxform_upload);
  }

  DownloadSes(data) {
    console.log(data);
    window.open(data.SES_VSCform_upload);
  }

  backVendor() {
    this.router.navigate(['admin/vendor-info']);
  }

};

LoginInfoPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_7__.InituserService
}, {
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthenticationService
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_6__.FirestoreService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_10__.UtilService
}, {
  type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__.FileOpener
}, {
  type: src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_8__.FirestorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}];

LoginInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-login-info',
  template: _login_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginInfoPage);


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

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content *ngIf=\"!textarea\">\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"2\" class=\"content1\">\n        \n          <ion-label class=\"menu\" style=\"color: #d84fad;\" (click)=\"moveToHome()\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToTopLevel()\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToPurchase()\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToVendorInfo()\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToInVendor()\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"logout()\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"10\" class=\"content2\">\n          <p style=\"text-align: center;\">Here is the profile of the vendor you selected.</p>\n          <br>\n  \n          <ion-row  class=\"back\" style=\"\">\n            <ion-col>\n            </ion-col>\n            <ion-col>\n            </ion-col>\n            <ion-col>\n              <ion-button class=\"btnLogin\"style=\"font-weight:bold;\"  (click)=\"backVendor()\" >\n                <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;font-weight: bold;\"></ion-icon>\n                <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n                back</ion-button> \n            </ion-col>\n          </ion-row>\n          <ion-row class=\"back\" style=\"\n    padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Login information:</ion-row>       \n\n\n<div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n        Vendor ID:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n     <ion-label>{{data.temporaryId}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n    Login ID\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n   <ion-label>{{data.temporaryId}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n   Password Reset:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>{{data.Confirm_new_password !== null ? 'Yes': 'No'}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\nLogin Level:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>{{data.login_level}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\nT & C Accept Status:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>(unknown status)</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\n Activation Status:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>Activated</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;\">\nLast Login:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n    <ion-label>{{data.login_date}}</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Registration Reminder Details:</ion-row>       \n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n   Notify Login Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n   Remain Login 1 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n          Remind Login 2 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n          Remind Completion 1 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;\">\n          Remind Completion 2 Status:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>N</ion-label>\n      </ion-col>\n    </ion-row>\n\n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"10\">\n      <ion-button class=\"btnLogin\"> \n        Deactivate\n      </ion-button>\n      <ion-button class=\"btnLogin\">\n        GDPR delete\n      </ion-button>\n      <ion-button class=\"btnLogin\">\n       Reset T & C\n      </ion-button>\n      <ion-button class=\"btnLogin\" (click)=\"sendCompletion()\">\n       Send completion reminder\n      </ion-button>\n      <ion-button class=\"btnLogin\">\n        Reset password\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"back\" style=\"padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">\n  Address Summary:</ion-row>   \n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" style=\"text-align-last: start;\" size=\"3\">\n      <ion-label>\n        Type\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"3\">\n      <ion-label>\n        Company Name\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"3\">\n      <ion-label>\n        Address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"1\">\n      <ion-label>\n        City\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"back1\" size=\"2\">\n      <ion-label>\n        Phone\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\n       Ordering address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\n             on computer services, llc\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nCompany registration address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row> -->\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nOrdering address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\n             {{data.companyname}}\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n         {{data.Address}}\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\n{{data.city}}\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n{{data.ph_no}}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nInvoicing address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: 2px;\">\n    <ion-col class=\"background\" size=\"3\">\n      <ion-label>\nReturn address\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label class=\"highlight1\" style=\"text-transform: uppercase;\">\non computer services, llc\n             </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"3\">\n      <ion-label style=\"text-transform:uppercase;\">\n9351  philadelphia road, suite\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"1\">\n      <ion-label style=\"text-transform:capitalize;\">\nbaltimore\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"background back1\" size=\"2\">\n      <ion-label>\n19725246052\n      </ion-label>\n    </ion-col>\n  </ion-row>\n   -->\n  <ion-row class=\"back\" style=\"\n margin-top: 2px;height: 30px;\"></ion-row>   \n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Contact Summary:</ion-row>   \n  \n  <ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n    <ion-col >\n      <ion-label>\n        Type\n      </ion-label>\n    </ion-col>\n<ion-col class=\"back1\">\n  <ion-label>\n    Name\n  </ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n  <ion-label>\n    Email\n  </ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n  <ion-label>\n    Phone\n  </ion-label>\n</ion-col>\n  </ion-row>\n  <ion-row class=\"background\" style=\"padding: 5px;\"> \n    <ion-label>\n      No contacts found\n    </ion-label>\n    <ion-col></ion-col>\n    <ion-col>\n      <ion-label>{{data.first_name}}</ion-label>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <ion-label>{{data.V_email}}</ion-label>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <ion-label>{{data.ph_no}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row  class=\"back\" style=\"\">\n    <ion-col>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n        Add new contact</ion-button> \n    </ion-col>\n  </ion-row>\n<br>\n\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Bank Details Summary:</ion-row>   \n\n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col >\n    <ion-label>\n     Country\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\">\n<ion-label>\n  Bank Name\n</ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n<ion-label>\n  Bank Account / IBAN\n</ion-label>\n</ion-col>\n<ion-col class=\"back1\">\n<ion-label>\n  Document\n</ion-label>\n</ion-col>\n</ion-row>\n<ion-row class=\"background\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col >\n    <ion-label>\n     {{data.country}}\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back-col\">\n<ion-label>\n {{data.bank_name}}\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\">\n<ion-label class=\"highlight1\">\n{{data.account}}\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\">\n<ion-img src=\"assets/pdf.png\" style=\"width: 25px;height: 25px;\" *ngIf=\"data.document !== null\"\n (click)=\"Downloadbank(data)\">\n <!-- {{data.document}} -->\n</ion-img>\n</ion-col>\n</ion-row>\n<ion-row  class=\"back\" style=\"\">\n  <ion-col>\n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n      Add new bank account</ion-button> \n  </ion-col>\n</ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Primary Product & Service Classification:</ion-row>   \n <ion-row class=\"background\" style=\"padding: 5px;\"> \n  <ion-label>\n Unable to generate summary section.\n  </ion-label>\n</ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Tax Details Summary:</ion-row>   \n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"8\">\n    <ion-label>\n     Tax Number Type\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\" size=\"4\">\n<ion-label>\n  Tax Number\n</ion-label>\n</ion-col>\n</ion-row>\n<ion-row class=\"background\" style=\"margin-top: 2px;text-align-last: start;\" *ngFor=\"let tax of taxDetails\">\n  <ion-col size=\"8\" class=\"back-col\">\n    <ion-label>\n    {{ tax.Tax_number_type}}\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back-col\" size=\"4\">\n<ion-label class=\"highlight1\">\n  {{ tax.Tax_number}}\n</ion-label>\n</ion-col>\n</ion-row>\n<ion-row  class=\"back\" style=\"\">\n  <ion-col>\n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n      Add new tax record</ion-button> \n  </ion-col>\n</ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">Tax Form Uploads:</ion-row>   \n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"4\">\n    <ion-label>\n   Upload Date\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\" size=\"4\">\n<ion-label>\n Form Type\n</ion-label>\n</ion-col>\n<ion-col size=\"4\" class=\"back1\">\n  <ion-label>\n    Download\n  </ion-label>\n</ion-col>\n</ion-row>\n\n<ion-row>\n<ion-col>{{data.upload_Date}}</ion-col>\n<ion-col>{{data.Formtype}} </ion-col>\n<ion-col>\n  <!-- {{data.Taxform_upload}} -->\n  <ion-img src=\"assets/pdf.png\" style=\"width: 25px;height: 25px;\" \n  *ngIf=\"data.Taxform_upload !== null\"\n   (click)=\"DownloadTax(data)\"></ion-img>\n</ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>{{data.upload_Date}}</ion-col>\n  <ion-col>{{data.Formtype}} </ion-col>\n  <ion-col>\n    <!-- {{data.Taxform_upload}} -->\n    <ion-img src=\"assets/pdf.png\" style=\"width: 25px;height: 25px;\" \n    *ngIf=\"data.SES_VSCform_upload !== null\"\n     (click)=\"DownloadSes(data)\"></ion-img>\n  </ion-col>\n</ion-row>\n\n<br>\n <ion-row  class=\"back\" style=\"\">\n  <ion-col>\n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\">\n      new upload</ion-button> \n  </ion-col>\n </ion-row>\n<br>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">SES Terms and Conditions History:</ion-row>   \n<ion-row class=\"back\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"3\">\n    <ion-label>\nEffective\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back1\" size=\"3\">\n<ion-label>\n  Decision\n</ion-label>\n</ion-col>\n<ion-col class=\"back1\" size=\"3\">\n  <ion-label>\n    Decision Date\n  </ion-label>\n  </ion-col>\n  <ion-col class=\"back1\" size=\"3\">\n    <ion-label>\n      Comment\n    </ion-label>\n    </ion-col>\n</ion-row>\n<ion-row class=\"background\" style=\"margin-top: 2px;text-align-last: start;\">\n  <ion-col size=\"3\" class=\"back-col\">\n    <ion-label>\n{{data.effective_Date}}\n    </ion-label>\n  </ion-col>\n<ion-col class=\"back-col\" size=\"3\">\n<ion-label>\n{{data.first_agree === true ? 'Agreed' : 'disagree'}}\n</ion-label>\n</ion-col>\n<ion-col class=\"back-col\" size=\"3\">\n  <ion-label>\n<!-- 2015-04-16 -->\n{{data.decision_Date}}\n  </ion-label>\n  </ion-col>\n  <ion-col class=\"back-col\" size=\"3\">\n    <ion-label>\n   \n    </ion-label>\n    </ion-col>\n</ion-row>\n <ion-row  class=\"back\" style=\"\">\n  <ion-col style=\"justify-content: left;\">\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\" (click)=\"showtextarea()\">\n    Review</ion-button> \n  </ion-col>\n  <ion-col>\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\"style=\"font-weight:bold;\" (click)=\"approveDetail()\">\n      Approve</ion-button> \n  </ion-col>\n </ion-row>\n </div>\n\n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  <ion-content *ngIf=\"textarea\" >\n    <ion-textarea [(ngModel)]=\"message\" style=\"width: 100%;border: 1px solid lightgray;height: 100px;margin: 10px;\">\n\n    </ion-textarea>\n    <ion-row  class=\"back\" style=\"\">\n      <ion-col style=\"justify-content: left;\">\n      </ion-col>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"btnLogin\"style=\"font-weight:bold;\" (click)=\"showtextarea()\">\n          back</ion-button> \n        <ion-button class=\"btnLogin\"style=\"font-weight:bold;\" (click)=\"sendVendorEmail()\">\n          Send</ion-button> \n      </ion-col>\n    </ion-row>\n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_login-info_login-info_module_ts.js.map