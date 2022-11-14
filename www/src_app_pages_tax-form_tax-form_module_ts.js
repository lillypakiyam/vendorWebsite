"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tax-form_tax-form_module_ts"],{

/***/ 9813:
/*!***********************************************************!*\
  !*** ./src/app/pages/tax-form/tax-form-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxFormPageRoutingModule": () => (/* binding */ TaxFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tax_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-form.page */ 31459);




const routes = [
    {
        path: '',
        component: _tax_form_page__WEBPACK_IMPORTED_MODULE_0__.TaxFormPage
    }
];
let TaxFormPageRoutingModule = class TaxFormPageRoutingModule {
};
TaxFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TaxFormPageRoutingModule);



/***/ }),

/***/ 65634:
/*!***************************************************!*\
  !*** ./src/app/pages/tax-form/tax-form.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxFormPageModule": () => (/* binding */ TaxFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tax_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-form-routing.module */ 9813);
/* harmony import */ var _tax_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-form.page */ 31459);







let TaxFormPageModule = class TaxFormPageModule {
};
TaxFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tax_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaxFormPageRoutingModule
        ],
        declarations: [_tax_form_page__WEBPACK_IMPORTED_MODULE_1__.TaxFormPage]
    })
], TaxFormPageModule);



/***/ }),

/***/ 31459:
/*!*************************************************!*\
  !*** ./src/app/pages/tax-form/tax-form.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxFormPage": () => (/* binding */ TaxFormPage)
/* harmony export */ });
/* harmony import */ var D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tax_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-form.page.html?ngResource */ 63307);
/* harmony import */ var _tax_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-form.page.scss?ngResource */ 43205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firestorage.service */ 39319);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);











let TaxFormPage = class TaxFormPage {
  constructor(router, inituser, firestore, storageSer, api) {
    this.router = router;
    this.inituser = inituser;
    this.firestore = firestore;
    this.storageSer = storageSer;
    this.api = api;
    this.browse = false;
    this.taxformupload = false;
    this.sesvscformupload = false;
    this.vendortaxform = {
      taxformcheck: false,
      formtype: '',
      taxformupload: '',
      sesvscformupload: ''
    };
    this.loggedInVendor = this.inituser.getVendorData();
    const currentDate = new Date();
    this.TodayDate = moment__WEBPACK_IMPORTED_MODULE_7__(currentDate).format('YYYY-MM-DD');
  }

  ngOnInit() {}

  moveToTerms() {
    const taxform = {
      id: this.loggedInVendor.id,
      Taxform_check: this.browse,
      Formtype: this.loggedInVendor.Formtype,
      Taxform_upload: this.loggedInVendor.Taxform_upload,
      SES_VSCform_upload: this.loggedInVendor.SES_VSCform_upload,
      upload_Date: this.TodayDate,
      login_level: '7'
    };
    console.log(taxform);

    if (this.loggedInVendor.Taxform_upload !== null && this.loggedInVendor.SES_VSCform_upload !== null) {
      this.firestore.update('vendorAdd', taxform.id, taxform).then(res => {
        console.log(res);
      });
      this.router.navigate(['pages/terms-conditions']);
    }

    this.fieldDetails();
  }

  moveToBack() {
    this.router.navigate(['pages/tax-record']);
  }

  fieldDetails() {
    if (this.loggedInVendor.Taxform_upload === null) {
      this.taxformupload = true;
    } else {
      this.taxformupload = false;
    }

    if (this.loggedInVendor.SES_VSCform_upload === null) {
      this.sesvscformupload = true;
    } else {
      this.sesvscformupload = false;
    }
  }

  select(eve) {
    console.log(eve.detail);

    if (eve.detail.checked === true) {
      this.browse = true;
    } else {
      this.browse = false;
    }
  }

  fileupload(event) {
    var _this = this;

    console.log(event);
    this.files = event.target.files[0];
    console.log(this.files);
    console.log(event.target.files[0].name);
    const name = event.target.files[0].name;
    this.taxName = name;
    this.storageSer.uploadContent(this.files, this.taxName).then( /*#__PURE__*/function () {
      var _ref = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
        console.log('success', success);
        _this.loggedInVendor.Taxform_upload = success.url;
        console.log('success url', _this.loggedInVendor.Taxform_upload);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref2 = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        console.log('err', err);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  fileSesupload(event) {
    var _this2 = this;

    console.log(event);
    this.sesfiles = event.target.files[0];
    console.log(this.files);
    console.log(event.target.files[0].name);
    const name = event.target.files[0].name;
    this.sesName = name;
    this.storageSer.uploadContent(this.sesfiles, this.sesName).then( /*#__PURE__*/function () {
      var _ref3 = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
        console.log('success', success);
        _this2.loggedInVendor.SES_VSCform_upload = success.url;
        console.log('success url', _this2.loggedInVendor.SES_VSCform_upload);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()).catch( /*#__PURE__*/function () {
      var _ref4 = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        console.log('err', err);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }

};

TaxFormPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__.InituserService
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService
}, {
  type: src_app_service_firestorage_service__WEBPACK_IMPORTED_MODULE_4__.FirestorageService
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}];

TaxFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-tax-form',
  template: _tax_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tax_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TaxFormPage);


/***/ }),

/***/ 43205:
/*!**************************************************************!*\
  !*** ./src/app/pages/tax-form/tax-form.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXgtZm9ybS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 63307:
/*!**************************************************************!*\
  !*** ./src/app/pages/tax-form/tax-form.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"util.Logout()\">Logout</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">FAQ</ion-label>\n          <br>\n          <br>\n      <ion-label class=\"menu\">Contact Us</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n        \n          <ion-row>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">1</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">2</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">3</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">4</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">5</div>\n            </div>\n            </ion-col>\n            <ion-col  class=\"mar\">\n               \n       \n              <div class=\"backnum\">\n              <div class=\"numbor1\">6</div>\n            </div>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"margin-left: -85px;\" color=\"primary\">Upload Tax form</ion-label>\n              <div class=\"horizonal\"></div>\n              <div class=\"vertical\"></div>\n              <div class=\"backnum\">\n              <div class=\"numbor\">7</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">8</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">9</div>\n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n         <br>\n          <h4 style=\"text-align: center;\">Please complete the form below to upload your U.S tax related files.</h4>\n          <h4 style=\"text-align: center;color: red;\">Vendors, please do not use this form to upload invoices.\n            </h4>\n\n<h4 style=\"text-align: center;color: red;\">Follow the instructions mentioned on the Purchase Order.</h4>\n  <h4 style=\"text-align: center;\">Please confirm whether you will do business with any SES entity bsed in the US.</h4>\n  <ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: center;color: black;font-weight: bold;\">Tax Details</ion-row>       \n  \n  <div class=\"login\" style=\"margin-top: 2px;\">\n    <ion-row class=\"wholeclass\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label>\n            Business with U.S:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n       <ion-checkbox style=\"vertical-align: sub;\" (ionChange)=\"select($event)\"></ion-checkbox>\n       <ion-label style=\"margin-left: 5px;\">Yes,we are intending to do business with a SES entity based in the U.S. <br>If not, press 'Next'</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;\">\n    Form Type:\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-select [(ngModel)]=\"loggedInVendor.Formtype\" style=\"border: 1px solid lightgray;width: 150px;\" [disabled]=\"browse === false\">\n          <ion-select-option>W-8xxx</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;color: red;\">\n            Tax Form Upload:\n            <p style=\"text-align-last: end;color: red;\">PDF only</p>\n        </ion-label>\n      </ion-col>\n      <!-- <ion-col size=\"9\" >\n        <ion-input type=\"file\" [disabled]=\"browse === false\" [(ngModel)]=\"loggedInVendor.Taxform_upload\"\n        style=\"width: 150px;\"></ion-input>\n        <ion-label style=\"vertical-align: middle;\">No file selected.</ion-label>\n       <ion-label *ngIf=\"taxformupload\" style=\"color: red;\">*Please fill this field</ion-label>\n      </ion-col> -->\n      <div>\n        <input type=\"file\" class=\"input\" style=\"width: 150px;\" (change)=\"fileupload($event)\" [disabled]=\"browse === false\">\n        <ion-label *ngIf=\"taxformupload\" style=\"color: red;\">*Please fill this field</ion-label>\n      </div>\n    </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label style=\"text-align: right;color: red;\">\n         SES VSC Form Upload:\n         <p style=\"text-align-last: end;color: red;\">PDF only</p>\n        </ion-label>\n      </ion-col>\n      <!-- <ion-col size=\"9\" >\n       <ion-input type=\"file\" [disabled]=\"browse === false\"  [(ngModel)]=\"loggedInVendor.SES_VSCform_upload\" style=\"width: 150px;\"></ion-input>\n        <ion-label style=\"vertical-align: middle;\">No file selected.</ion-label>\n      <ion-label *ngIf=\"sesvscformupload\" style=\"color: red;\">*Please fill this field</ion-label>\n      </ion-col> -->\n    <div>\n      <input type=\"file\" class=\"input\" style=\"width: 150px;\" (change)=\"fileSesupload($event)\" [disabled]=\"browse === false\">\n      <ion-label *ngIf=\"sesvscformupload\" style=\"color: red;\">*Please fill this field</ion-label>\n    </div>\n\n    </ion-row>\n    <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n      <ion-col size=\"8\"></ion-col>\n      <ion-col size=\"4\">\n        <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n          <ion-icon name=\"chevron-back\"></ion-icon>\n          <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>Back\n        </ion-button>\n    \n        <ion-button class=\"btnLogin\" (click)=\"moveToTerms()\">Next\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n          <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n    </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n  </ion-content>\n\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tax-form_tax-form_module_ts.js.map