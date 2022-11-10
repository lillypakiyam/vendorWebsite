"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_terms-conditions_terms-conditions_module_ts"],{

/***/ 93829:
/*!***************************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageRoutingModule": () => (/* binding */ TermsConditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.page */ 50306);




const routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPage
    }
];
let TermsConditionsPageRoutingModule = class TermsConditionsPageRoutingModule {
};
TermsConditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsConditionsPageRoutingModule);



/***/ }),

/***/ 28671:
/*!*******************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageModule": () => (/* binding */ TermsConditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions-routing.module */ 93829);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page */ 50306);







let TermsConditionsPageModule = class TermsConditionsPageModule {
};
TermsConditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPageRoutingModule
        ],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsPage]
    })
], TermsConditionsPageModule);



/***/ }),

/***/ 50306:
/*!*****************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPage": () => (/* binding */ TermsConditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _terms_conditions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.page.html?ngResource */ 83692);
/* harmony import */ var _terms_conditions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page.scss?ngResource */ 62641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ 23628);









let TermsConditionsPage = class TermsConditionsPage {
    constructor(router, inituser, firestore, api) {
        this.router = router;
        this.inituser = inituser;
        this.firestore = firestore;
        this.api = api;
        this.vendorterms = {
            agreecheck: false,
            note: ''
        };
        this.termcheck = false;
        this.loggedInVendor = this.inituser.getVendorData();
        console.log(this.loggedInVendor, this.loggedInVendor.requestEmail, this.loggedInVendor.Confirm_new_password);
    }
    ngOnInit() {
    }
    moveToFinal() {
        this.load();
        this.loggedInVendor = this.inituser.getVendorData();
        const terms = {
            id: this.loggedInVendor.id,
            AgreeCheck: this.termcheck,
            Note: this.vendorterms.note,
            first_agree: this.agree,
            sec_agree: this.agreeTerms,
            new_vendorId: this.numberId,
        };
        this.firestore.update('vendorAdd', terms.id, terms).then(res => {
            console.log(res);
            this.sendVendorEmail();
            this.router.navigate(['pages/final-submission']);
        });
    }
    sendVendorEmail() {
        // const email = new email.send()
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "lilypackiyam@gmail.com",
            Password: "0527721E803854F2C924B66A3BAEAE2A03B2",
            // To : document.getElementById('requestEmail').value,
            To: this.loggedInVendor.requestEmail,
            From: 'lilypackiyam@gmail.com',
            Subject: "This is the subject",
            Body: `${'we have created a new vendor account for you.Here is the link to activate the account.'}
               Link: 'https://vendorweb-f72c9.web.app/pages/login',
               permanent Id : ${this.numberId},
               password : ${this.loggedInVendor.Confirm_new_password}
               `,
        }).then(message => {
            alert('message sent');
            console.log(message);
        });
    }
    load() {
        var random_id = '';
        // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var characters = '1234567890';
        for (var i = 0; i < 10; i++) {
            random_id += characters.charAt(Math.floor(Math.random() * characters.length));
            this.numberId = random_id;
            console.log(this.numberId);
        }
        this.emailId = this.numberId + "@gmail.com";
        // console.log(this.emailId)
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();
        const user = auth.currentUser;
        console.log(auth, this.emailId);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.updateEmail)(user, this.emailId).then(res => {
            console.log(res);
            // this.router.navigate(['pages/vendor-profile'])
        });
    }
    select(eve) {
        if (eve.detail.checked === true) {
            this.agree = 'yes i agree';
        }
        else {
            this.agree = 'not agree';
        }
        console.log(eve, this.agree);
    }
    selects(evs) {
        if (evs.detail.checked === true) {
            this.agreeTerms = 'yes i agree';
        }
        else {
            this.agreeTerms = 'not agree';
        }
        console.log(evs, this.agree);
    }
    moveToBack() {
        this.router.navigate(['pages/tax-form']);
    }
};
TermsConditionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__.InituserService },
    { type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
TermsConditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-terms-conditions',
        template: _terms_conditions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_terms_conditions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsConditionsPage);



/***/ }),

/***/ 62641:
/*!******************************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1jb25kaXRpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 83692:
/*!******************************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"3\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"moveToLog()\">Logout</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">FAQ</ion-label>\n          <br>\n          <br>\n      <ion-label class=\"menu\">Contact Us</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n        \n          <ion-row>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">1</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">2</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">3</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">4</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">5</div>\n            </div>\n            </ion-col>\n            <ion-col  class=\"mar\">\n               \n       \n              <div class=\"backnum\">\n              <div class=\"numbor1\">6</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n             \n              <div class=\"backnum\">\n              <div class=\"numbor1\">7</div>\n            </div>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"margin-left: -125px;\" color=\"primary\">Terms and Conditions</ion-label>\n              <div class=\"horizonal\"></div>\n              <div class=\"vertical\"></div>\n              <div class=\"backnum\">\n              <div class=\"numbor\">8</div>\n            </div>\n            </ion-col>\n            <ion-col class=\"mar\">\n              <div class=\"backnum\">\n              <div class=\"numbor1\">9</div>\n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n         <br>\n          <h4 style=\"text-align: center;color: red;\">The file was successfully uploaded.\n            </h4>\n            <h5 style=\"font-weight: bold;\">SES TERMS AND CONDITIONS</h5>\n            <P>Dear Vendor,</P>\n            <p>The SES Terms and Conditions were uploaded on 01 August 2017.</p>\n            <p>You can read them in PDF format \n            <href src=\"\" style=\"color: var(--ion-color-secondary);text-decoration: underline;\">SES_Terms_and_Conditions.pdf.</href>Once you have read them please select either 'Agree' or 'Disagree' in oreder to continue using the SES Vendor Management System (VMS). </p>\n<ion-row class=\"back\" style=\"\n  padding: 5px;margin-top: 2px;text-align: center;justify-content: center;\">\n<ion-checkbox (ionChange)=\"select($event)\" style=\"vertical-align: sub;\"></ion-checkbox>\n<ion-input> Yes, I agree with the SES Terms and Conditions</ion-input>  \n</ion-row>       \n<ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;text-align: center;justify-content: center;\">\n<ion-checkbox (ionChange)=\"selects($event)\" style=\"vertical-align: sub;\"></ion-checkbox>\n<ion-input> Yes, I agree with the SES Terms and Conditions</ion-input>  \n</ion-row> \n  <div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"back\" style=\"text-align-last:start ;padding: 5px;\">\n    <p style=\"color: red;padding-left: 5px;\">\n      If you disagree with the SES Terms and Conditions, please provide your concerns as well as your name and contact information \n      so we can further assist you.\n         </p>\n         <p style=\"color: red;padding-left: 5px;text-align: start\">\n        NOTE: If you have a different agreement with SES, that agreement shall prevail(see clause 16.2 of the SES Terms and Conditions).\n      \n        In this case, please choose \"Agree\" and provide a comment below with the deatils of the agreement in place(date,name,etc.). \n        </p>\n  </ion-row>\n  <ion-row class=\"back\" style=\"text-align-last:start ;padding: 5px;\">\n    <ion-col size=\"10\">\n   <ion-textarea [(ngModel)] =\"vendorterms.note\" style=\"background: white;height: 200px;\"></ion-textarea>\n  </ion-col>\n   <ion-col></ion-col>\n  </ion-row>\n    <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n      <ion-col size=\"8\"></ion-col>\n      <ion-col size=\"4\">\n        <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n          <ion-icon name=\"chevron-back\"></ion-icon>\n          <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>Back\n        </ion-button>\n    \n        <ion-button class=\"btnLogin\" (click)=\"moveToFinal()\">Next\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n          <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_terms-conditions_terms-conditions_module_ts.js.map