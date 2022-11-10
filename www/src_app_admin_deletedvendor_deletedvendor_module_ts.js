"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_deletedvendor_deletedvendor_module_ts"],{

/***/ 65450:
/*!*********************************************************************!*\
  !*** ./src/app/admin/deletedvendor/deletedvendor-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedvendorPageRoutingModule": () => (/* binding */ DeletedvendorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _deletedvendor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deletedvendor.page */ 17518);




const routes = [
    {
        path: '',
        component: _deletedvendor_page__WEBPACK_IMPORTED_MODULE_0__.DeletedvendorPage
    }
];
let DeletedvendorPageRoutingModule = class DeletedvendorPageRoutingModule {
};
DeletedvendorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeletedvendorPageRoutingModule);



/***/ }),

/***/ 35369:
/*!*************************************************************!*\
  !*** ./src/app/admin/deletedvendor/deletedvendor.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedvendorPageModule": () => (/* binding */ DeletedvendorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _deletedvendor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deletedvendor-routing.module */ 65450);
/* harmony import */ var _deletedvendor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deletedvendor.page */ 17518);







let DeletedvendorPageModule = class DeletedvendorPageModule {
};
DeletedvendorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _deletedvendor_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeletedvendorPageRoutingModule
        ],
        declarations: [_deletedvendor_page__WEBPACK_IMPORTED_MODULE_1__.DeletedvendorPage]
    })
], DeletedvendorPageModule);



/***/ }),

/***/ 17518:
/*!***********************************************************!*\
  !*** ./src/app/admin/deletedvendor/deletedvendor.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedvendorPage": () => (/* binding */ DeletedvendorPage)
/* harmony export */ });
/* harmony import */ var D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deletedvendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deletedvendor.page.html?ngResource */ 99296);
/* harmony import */ var _deletedvendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deletedvendor.page.scss?ngResource */ 35851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/util.service */ 19915);












let DeletedvendorPage = class DeletedvendorPage {
  constructor(api, firestore, initUser, alert, loadCnt, util, router) {
    this.api = api;
    this.firestore = firestore;
    this.initUser = initUser;
    this.alert = alert;
    this.loadCnt = loadCnt;
    this.util = util;
    this.router = router;
    this.company = {
      companyname: '',
      companyEmail: '',
      requestEmail: ''
    };
    const currentDate = new Date();
    this.TodayDate = moment__WEBPACK_IMPORTED_MODULE_5__(currentDate).format('YYYY-MM-DD');
    this.loggedInAdmin = this.initUser.getUserData();
    console.log(this.TodayDate);
    console.log(this.api.tempVendor);
    console.log(this.api.tempVendor.id);
    console.log(this.api.vendorInvite);
  }

  ngOnInit() {}

  deleteVendors() {
    var _this = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.alertc = yield _this.util.createAlert('', false, `Do you want to delete?`, {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: function () {
          var _ref = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this.alert.dismiss();
          });

          return function handler() {
            return _ref.apply(this, arguments);
          };
        }()
      }, {
        text: 'Yes',
        handler: function () {
          var _ref2 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this.alert.dismiss();

            _this.firestore.createWithvendor('deleteVendor', _this.api.tempVendor.id, _this.api.tempVendor).then(ress => {
              console.log(ress);
              const dele = {
                delete_date: _this.TodayDate,
                delete_name: _this.loggedInAdmin.name
              };

              _this.firestore.update('deleteVendor', _this.api.tempVendor.id, dele).then(use => {
                console.log(use);
              });

              _this.firestore.delete('vendorAdd', _this.api.tempVendor.id).then( /*#__PURE__*/function () {
                var _ref3 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (use) {
                  console.log(use);

                  _this.loading();

                  _this.router.navigate(['admin/invitedvendors']);

                  _this.api.vendorInvite.filter((vend, index) => {
                    if (vend.id === _this.api.tempVendor.id) {
                      _this.api.vendorInvite.splice(index, 1);
                    }
                  }); // const toast =await this.api.createToasts('successfully deleted',false,'middle')
                  // await toast.present()

                });

                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }());
            });
          });

          return function handler() {
            return _ref2.apply(this, arguments);
          };
        }()
      });
      yield _this.alertc.present();
    })();
  }

  loading() {
    var _this2 = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this2.loadCnt.create({
        message: 'Deleting...',
        duration: 3000,
        spinner: 'circles'
      });
      load.present();
    })();
  }

  back() {
    this.router.navigate(['admin/invitedvendors']);
  }

  moveToHome() {
    this.router.navigate(['admin/home']);
  }

  moveToAd() {
    this.router.navigate(['/admin/administrator-accounts']);
  } //  moveToPurchase(){
  // this.router.navigate(['admin/purchase-order']);
  // }
  // moveToTopLevel(){
  //   this.router.navigate(['admin/top-level'])
  // }
  // moveToVendorInfo(){
  //   this.router.navigate(['admin/vendor-info'])
  // }


  inviteNav(data) {
    if ('home' === data) {
      this.router.navigate(['admin/home']);
    }

    if ('toplevel' === data) {
      this.router.navigate(['admin/top-level']);
    }

    if ('purchase' === data) {
      this.router.navigate(['admin/purchase-order']);
    }

    if ('vendorinform' === data) {
      this.router.navigate(['admin/vendor-info']);
    }

    if ('invitedvendors' === data) {
      this.router.navigate(['admin/invitedvendors']);
    }

    if ('invited' === data) {
      this.router.navigate(['admin/administrator-accounts']);
    }
  }

};

DeletedvendorPage.ctorParameters = () => [{
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__.InituserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_7__.UtilService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

DeletedvendorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-deletedvendor',
  template: _deletedvendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_deletedvendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DeletedvendorPage);


/***/ }),

/***/ 35851:
/*!************************************************************************!*\
  !*** ./src/app/admin/deletedvendor/deletedvendor.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".back {\n  border-left: 2px solid white;\n  text-align-last: start;\n}\n\n.highlight1 {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZWR2ZW5kb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBRUksMEJBQUE7QUFDSiIsImZpbGUiOiJkZWxldGVkdmVuZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNre1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogc3RhcnQ7XHJcbn0gXHJcbi5oaWdobGlnaHQxe1xyXG4gICAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */";

/***/ }),

/***/ 99296:
/*!************************************************************************!*\
  !*** ./src/app/admin/deletedvendor/deletedvendor.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n          <ion-label class=\"menu\" (click)=\"moveToHome()\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('toplevel')\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('purchase')\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('vendorinform')\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('invited')\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n      \n  <p style=\"text-align: center;\">Please fill in and submit this form so invite a new vendor.</p>\n  <p style=\"text-align: center;color: red;\">Please ensure that fields labelled in RED are filled in.</p>\n  <ion-row class=\"back\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">Invite Vendor</ion-row>\n<!-- <form onsubmit=\"sendvendorEmail();reset();return;\" method=\"post\" class=\"class_form\"> -->\n  <div class=\"login\" style=\"margin-top: 2px;\">\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;color: red;\">Company name:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n       <ion-input class=\"input\" [(ngModel)]=\"api.tempVendor.companyname\"></ion-input>\n      <ion-label *ngIf=\"companynameNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;color: red;\">\n   Company Email:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n       <ion-input class=\"input\" [(ngModel)]=\"api.tempVendor.companyEmail\"></ion-input>\n      <ion-label *ngIf=\"companyEmailNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;color: red;\">\n   Requested Email:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n       <ion-input class=\"input\" [(ngModel)]=\"api.tempVendor.requestEmail\"></ion-input>\n       <!-- <div *ngIf=\"!passhide\"> -->\n        <!-- <ion-input class=\"input\" [value]=\"randomId\" id=\"requestpass\"></ion-input> -->\n       <!-- </div> -->\n      <ion-label *ngIf=\"requestEmailNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label>Upload invoice if Exists</ion-label>\n        </ion-col>\n      <ion-col class=\"\" size=\"8\">\n    <!-- <ion-button class=\"btnLogin\" > Browse...</ion-button> -->\n    <ion-row class=\"btnLogin\">\n      <ion-input  type=\"file\" placeholder=\"Browse..\" >\n      </ion-input>\n      <!-- <ion-img src=\"assets/pdf.png\" style=\"width: 25px;height: 25px;\" *ngIf=\"api.tempVendor.invoiceUpload !== null\">\n      </ion-img> -->\n    </ion-row>\n   <!-- <img src=\"api.tempVendor.invoiceUpload\"> -->\n    <!-- <ion-label style=\"vertical-align: middle;\">No file selected.</ion-label> -->\n  </ion-col>\n </ion-row>\n   \n    <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col size=\"4\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-row>\n         <ion-col>\n           <ion-button class=\"btnLogin\" (click)=\"back()\">\n             <ion-icon name=\"chevron-back\"></ion-icon>\n             <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n             Back\n           </ion-button>\n         </ion-col>\n         <ion-col>\n          <ion-button class=\"btnLogin\" (click)=\"deleteVendors()\">delete</ion-button>\n         </ion-col>\n         <ion-col>\n          <ion-button class=\"btnLogin\" (click)=\"fileuploads()\">delete invoice</ion-button>\n         </ion-col>\n         <ion-col>\n          <ion-button class=\"btnLogin\" type=\"submit\" (click)=\"fileuploads()\">Submit</ion-button>\n         </ion-col>\n        \n        </ion-row>\n      </ion-col>\n    </ion-row>\n   </div>\n  <!-- </form> -->\n</ion-col>\n  </ion-row>\n</ion-grid>\n  \n<!-- <script>\n  function sendvendorEmail(){\n    // alert('Your Message submitted successfully');\n    console.log('requestEmail')\n    Email.send({\n      Host : \"smtp.elasticemail.com\",\n      Username : \"lilypackiyam@gmail.com\",\n      Password : \"0527721E803854F2C924B66A3BAEAE2A03B2\",\n      To : document.getElementById('requestEmail').value,\n      // To : `${email}`,\n      From : 'lilypackiyam@gmail.com',\n      Subject : \"This is the subject\",\n      Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}\n               userName : ${document.getElementById('requestEmail').value},\n               password : ${document.getElementById('requestpass').value}`\n    }).then(\n    message => \n    // console.log(message)\n    // alert(message)\n    alert('message sent successfully')\n\n    );\n  }\n </script> -->\n\n  </ion-content>\n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img>  \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_deletedvendor_deletedvendor_module_ts.js.map