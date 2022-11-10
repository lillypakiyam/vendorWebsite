"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_addvendor_addvendor_module_ts"],{

/***/ 59323:
/*!*************************************************************!*\
  !*** ./src/app/admin/addvendor/addvendor-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddvendorPageRoutingModule": () => (/* binding */ AddvendorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _addvendor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addvendor.page */ 13105);




const routes = [
    {
        path: '',
        component: _addvendor_page__WEBPACK_IMPORTED_MODULE_0__.AddvendorPage
    }
];
let AddvendorPageRoutingModule = class AddvendorPageRoutingModule {
};
AddvendorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddvendorPageRoutingModule);



/***/ }),

/***/ 11027:
/*!*****************************************************!*\
  !*** ./src/app/admin/addvendor/addvendor.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddvendorPageModule": () => (/* binding */ AddvendorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _addvendor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addvendor-routing.module */ 59323);
/* harmony import */ var _addvendor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addvendor.page */ 13105);







let AddvendorPageModule = class AddvendorPageModule {
};
AddvendorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addvendor_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddvendorPageRoutingModule
        ],
        declarations: [_addvendor_page__WEBPACK_IMPORTED_MODULE_1__.AddvendorPage]
    })
], AddvendorPageModule);



/***/ }),

/***/ 13105:
/*!***************************************************!*\
  !*** ./src/app/admin/addvendor/addvendor.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddvendorPage": () => (/* binding */ AddvendorPage)
/* harmony export */ });
/* harmony import */ var D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _addvendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addvendor.page.html?ngResource */ 70883);
/* harmony import */ var _addvendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addvendor.page.scss?ngResource */ 20264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/util.service */ 19915);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/firestorage.service */ 39319);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);














let AddvendorPage = class AddvendorPage {
  constructor(router, firestore, initUser, api, loadCnt, storageSer, util, fireauth) {
    this.router = router;
    this.firestore = firestore;
    this.initUser = initUser;
    this.api = api;
    this.loadCnt = loadCnt;
    this.storageSer = storageSer;
    this.util = util;
    this.fireauth = fireauth;
    this.venid = 'lilly';
    this.passhide = false;
    this.companynameNot = false;
    this.companyEmailNot = false;
    this.requestEmailNot = false;
    this.company = {
      companyname: '',
      companyEmail: '',
      requestEmail: ''
    };
    const currentDate = new Date();
    this.TodayDate = moment__WEBPACK_IMPORTED_MODULE_8__(currentDate).format('YYYY-MM-DD');
    console.log(this.TodayDate);
    this.loggedInAdmin = this.initUser.getUserData();
    console.log(this.loggedInAdmin.email);
  }

  ngOnInit() {}

  moveToAd() {
    this.router.navigate(['admin/administrator-accounts']);
  }

  back() {
    this.router.navigate(['admin/invitedvendors']);
  }

  moveToHome() {
    this.router.navigate(['admin/home']);
  }

  inviteNav(data) {
    if ('toplevel' === data) {
      this.router.navigate(['admin/top-level']);
    }

    if ('purchase' === data) {
      this.router.navigate(['admin/purchase-order']);
    }

    if ('vendorinform' === data) {
      this.router.navigate(['admin/vendor-info']);
    }

    if ('invited' === data) {
      this.router.navigate(['admin/invitedvendors']);
    }
  } // requestEmail(event){
  //   console.log(event.target.value)
  //   this.company.requestEmail = event.target.value
  // }


  sendVendorEmail() {
    // const email = new email.send()
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "vendordeveloper22@gmail.com",
      Password: "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
      // To : document.getElementById('requestEmail').value,
      To: this.company.requestEmail,
      From: 'vendordeveloper22@gmail.com',
      Subject: "vendor account",
      Body: `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 Temporary Id : ${this.numberId},
                 password : ${this.randomId}
                 `
    }).then(message => {
      alert('message sent');
      console.log(message);
    });
  }

  fileuploads() {
    var _this = this;

    console.log('companyname', this.company.companyname);
    console.log('companyEmail', this.company.companyEmail);
    console.log('requestEmail', this.company.requestEmail); // document.getElementById('random_id').val

    var random_id = ''; // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var characters = '1234567890';

    for (var i = 0; i < 7; i++) {
      random_id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    this.randomId = random_id;
    console.log(this.randomId);
    var email_id = ''; // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var characters = '1234567890';

    for (var i = 0; i < 5; i++) {
      email_id += characters.charAt(Math.floor(Math.random() * characters.length));
      this.numberId = 'TEMP' + email_id;
      console.log(this.numberId);
    }

    this.emailId = this.numberId + '@gmail.com';
    console.log(this.emailId);
    const vendorInfo = {
      id: null,
      companyname: this.company.companyname,
      companyEmail: this.company.companyEmail,
      requestEmail: this.company.requestEmail,
      temporaryId: this.numberId,
      temprory_password: this.randomId,
      invite_Date: this.TodayDate,
      login_date: null,
      invited_by: this.loggedInAdmin.email,
      invited_name: this.loggedInAdmin.name,
      login_level: null,
      delete_date: null,
      Current_password: null,
      New_password: null,
      Confirm_new_password: null,
      Address: null,
      Company_name: null,
      former_name: null,
      V_email: null,
      confim_email: null,
      street: null,
      country: null,
      house: null,
      street2: null,
      postal_code: null,
      city: null,
      po_postal: null,
      po_Box: null,
      district: null,
      region_state: null,
      ph_no: null,
      fax_no: null,
      // 2page
      first_name: null,
      last_name: null,
      relationship_type: null,
      contact_email: null,
      phone_no: null,
      faxno: null,
      Iban_country: null,
      iban: null,
      account: null,
      bank_code: null,
      bank_name: null,
      ibanStreet: null,
      ibanCity: null,
      swift_bic: null,
      currency: null,
      document: null,
      Category: null,
      Subcategory: null,
      Tax_check: null,
      reason: null,
      Tax_number_type: null,
      Tax_number: null,
      tax_Details: [],
      Taxform_check: null,
      Formtype: null,
      Taxform_upload: null,
      SES_VSCform_upload: null,
      AgreeCheck: false,
      Note: null,
      first_agree: false,
      sec_agree: false,
      effective_Date: null,
      decision_Date: null,
      completed: false,
      approved: false,
      permenantId: null,
      invoiceUpload: this.documentUpload,
      invoicefileType: this.fileType
    };
    console.log(this.emailId, this.randomId);
    this.fireauth.createAccount(this.emailId, this.randomId).then(user => {
      console.log(this.randomId);
      console.log('user', user);
      console.log('user', user.uid);
      this.sendVendorEmail();
      vendorInfo.id = user.uid; // this.initUser.setToken(user.uid)

      this.firestore.createWithId('vendorAdd', vendorInfo).then( /*#__PURE__*/function () {
        var _ref = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (usr) {
          console.log(usr); //  console.log(adminInfo);

          _this.loading(); // const toast = await this.api.createToasts('the vendor successfully added & email sent', false, 'top');
          // await toast.present();


          _this.util.goForward('admin/invitedvendors');
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => {
        console.log(err);
      });
      this.util.goForward('admin/addvendor');
      this.NewPassword();
    }, /*#__PURE__*/function () {
      var _ref2 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        if (_this.company.companyname.length === 0 && _this.company.companyEmail.length === 0 && _this.company.requestEmail.length === 0) {
          _this.NewPassword();
        } else {
          const toast = yield _this.api.createToast('the email id is already use in by another account', false, 'top');
          yield toast.present();

          if (_this.company.companyname.length === 0 || _this.company.companyEmail.length === 0 || _this.company.requestEmail.length === 0) {
            _this.NewPassword();
          }
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  loading() {
    var _this2 = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this2.loadCnt.create({
        message: 'Adding...',
        duration: 3000,
        spinner: 'circles'
      });
      load.present();
    })();
  }

  uploading() {
    var _this3 = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this3.loadCnt.create({
        message: 'uploading...',
        duration: 3000,
        spinner: 'circles'
      });
      load.present();
    })();
  }

  uploadfile(event) {
    var _this4 = this;

    console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
    this.uploading();
    console.log(event.target.files[0].name);
    console.log(event.target.files[0].type);
    const name = event.target.files[0].name;
    this.filename = name;
    this.fileType = event.target.files[0].type;
    this.storageSer.uploadContent(this.files, name).then( /*#__PURE__*/function () {
      var _ref3 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
        // console.log('success', success);
        _this4.documentUpload = success.url;
        console.log('success url', _this4.documentUpload);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref4 = (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        console.log('err', err);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }

  NewPassword() {
    if (this.company.companyname.length === 0) {
      this.companynameNot = true;
    } else {
      this.companynameNot = false;
    }

    if (this.company.companyEmail.length === 0) {
      this.companyEmailNot = true;
    } else {
      this.companyEmailNot = false;
    }

    if (this.company.requestEmail.length === 0) {
      this.requestEmailNot = true;
    } else {
      this.requestEmailNot = false;
    }
  }

};

AddvendorPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__.InituserService
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_9__.FirestorageService
}, {
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_7__.UtilService
}, {
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseAuthenticationService
}];

AddvendorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-addvendor',
  template: _addvendor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_addvendor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddvendorPage);


/***/ }),

/***/ 20264:
/*!****************************************************************!*\
  !*** ./src/app/admin/addvendor/addvendor.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGR2ZW5kb3IucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 70883:
/*!****************************************************************!*\
  !*** ./src/app/admin/addvendor/addvendor.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n          <ion-label class=\"menu\" (click)=\"moveToHome()\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('toplevel')\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('purchase')\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('vendorinform')\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('invited')\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n      \n  <p style=\"text-align: center;\">Please fill in and submit this form so invite a new vendor.</p>\n  <p style=\"text-align: center;color: red;\">Please ensure that fields labelled in RED are filled in.</p>\n  <ion-row class=\"back\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">Invite Vendor</ion-row>\n<!-- <form onsubmit=\"sendvendorEmail();reset();return;\" method=\"post\" class=\"class_form\"> -->\n  <div class=\"login\" style=\"margin-top: 2px;\">\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;color: red;\">Company name:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n       <ion-input class=\"input\" [(ngModel)]=\"company.companyname\"></ion-input>\n      <ion-label *ngIf=\"companynameNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;color: red;\">\n   Company Email:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n       <ion-input class=\"input\" [(ngModel)]=\"company.companyEmail\"></ion-input>\n      <ion-label *ngIf=\"companyEmailNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label style=\"text-align: right;color: red;\">\n   Requested Email:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n       <ion-input class=\"input\" [(ngModel)]=\"company.requestEmail\"></ion-input>\n       <!-- <div *ngIf=\"!passhide\"> -->\n        <!-- <ion-input class=\"input\" [value]=\"randomId\" id=\"requestpass\"></ion-input> -->\n       <!-- </div> -->\n      <ion-label *ngIf=\"requestEmailNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col class=\"back\" size=\"4\">\n        <ion-label>Upload invoice if Exists</ion-label>\n        </ion-col>\n      <ion-col class=\"\" size=\"8\">\n    <!-- <ion-button class=\"btnLogin\" > Browse...</ion-button> -->\n    <!-- <ion-input class=\"btnLogin\" type=\"file\" placeholder=\"Browse..\"></ion-input> -->\n    <input type=\"file\" class=\"input\" style=\"width: 150px;\" (change)=\"uploadfile($event)\">\n\n    <!-- <ion-label style=\"vertical-align: middle;\">No file selected.</ion-label> -->\n  </ion-col>\n </ion-row>\n   \n    <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;width: 700px;margin-left: 5%;margin-right: 20%;\">\n      <ion-col size=\"8\"></ion-col>\n      <ion-col size=\"4\">\n        \n        <ion-button class=\"btnLogin\" (click)=\"back()\">\n          <ion-icon name=\"chevron-back\"></ion-icon>\n          <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n          Back\n        </ion-button>\n        <ion-button class=\"btnLogin\" type=\"submit\" (click)=\"fileuploads()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n   </div>\n  <!-- </form> -->\n</ion-col>\n  </ion-row>\n</ion-grid>\n  \n<!-- <script>\n  function sendvendorEmail(){\n    // alert('Your Message submitted successfully');\n    console.log('requestEmail')\n    Email.send({\n      Host : \"smtp.elasticemail.com\",\n      Username : \"lilypackiyam@gmail.com\",\n      Password : \"0527721E803854F2C924B66A3BAEAE2A03B2\",\n      To : document.getElementById('requestEmail').value,\n      // To : `${email}`,\n      From : 'lilypackiyam@gmail.com',\n      Subject : \"This is the subject\",\n      Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}\n               userName : ${document.getElementById('requestEmail').value},\n               password : ${document.getElementById('requestpass').value}`\n    }).then(\n    message => \n    // console.log(message)\n    // alert(message)\n    alert('message sent successfully')\n\n    );\n  }\n </script> -->\n\n  </ion-content>\n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_addvendor_addvendor_module_ts.js.map