"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_vendor-contact-profile_vendor-contact-profile_module_ts"],{

/***/ 48716:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vendor-contact-profile/vendor-contact-profile-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorContactProfilePageRoutingModule": () => (/* binding */ VendorContactProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _vendor_contact_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-contact-profile.page */ 81905);




const routes = [
    {
        path: '',
        component: _vendor_contact_profile_page__WEBPACK_IMPORTED_MODULE_0__.VendorContactProfilePage
    }
];
let VendorContactProfilePageRoutingModule = class VendorContactProfilePageRoutingModule {
};
VendorContactProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VendorContactProfilePageRoutingModule);



/***/ }),

/***/ 16213:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/vendor-contact-profile/vendor-contact-profile.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorContactProfilePageModule": () => (/* binding */ VendorContactProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vendor_contact_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-contact-profile-routing.module */ 48716);
/* harmony import */ var _vendor_contact_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor-contact-profile.page */ 81905);







let VendorContactProfilePageModule = class VendorContactProfilePageModule {
};
VendorContactProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vendor_contact_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorContactProfilePageRoutingModule
        ],
        declarations: [_vendor_contact_profile_page__WEBPACK_IMPORTED_MODULE_1__.VendorContactProfilePage]
    })
], VendorContactProfilePageModule);



/***/ }),

/***/ 81905:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vendor-contact-profile/vendor-contact-profile.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorContactProfilePage": () => (/* binding */ VendorContactProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vendor_contact_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-contact-profile.page.html?ngResource */ 97445);
/* harmony import */ var _vendor_contact_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor-contact-profile.page.scss?ngResource */ 97149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);








let VendorContactProfilePage = class VendorContactProfilePage {
    constructor(router, api, inituser, firestore) {
        this.router = router;
        this.api = api;
        this.inituser = inituser;
        this.firestore = firestore;
        this.firstNotfill = false;
        this.reTypetNotfill = false;
        this.contactEmailNotfill = false;
        this.phoneNotfill = false;
        this.faxNotfill = false;
        this.vendorContact = {
            first_name: '',
            last_name: '',
            relationship_type: '',
            contact_email: '',
            ph_no: '',
            fax_No: ''
        };
    }
    ngOnInit() {
    }
    moveToBack() {
        this.router.navigate(['pages/vendor-profile']);
    }
    moveTo() {
        this.loggedInVendor = this.inituser.getVendorData();
        const Contact = {
            id: this.loggedInVendor.id,
            Company_name: this.vendorContact.first_name,
            former_name: this.vendorContact.last_name,
            relationship_type: this.vendorContact.relationship_type,
            contact_email: this.vendorContact.contact_email,
            ph_no: this.vendorContact.ph_no,
            fax_no: this.vendorContact.fax_No
        };
        if (this.vendorContact.first_name.length !== 0 && this.vendorContact.relationship_type.length !== 0
            && this.vendorContact.contact_email.length !== 0
            && this.vendorContact.ph_no.length !== 0) {
            this.firestore.update('vendorAdd', Contact.id, Contact).then(res => {
                this.router.navigate(['pages/bank-details']);
            });
        }
        this.fieldDetails();
    }
    fieldDetails() {
        if (this.vendorContact.first_name.length === 0) {
            this.firstNotfill = true;
        }
        else {
            this.firstNotfill = false;
        }
        if (this.vendorContact.relationship_type.length === 0) {
            this.reTypetNotfill = true;
        }
        else {
            this.reTypetNotfill = false;
        }
        if (this.vendorContact.ph_no.length === 0) {
            this.phoneNotfill = true;
        }
        else {
            this.phoneNotfill = false;
        }
        if (this.vendorContact.contact_email.length === 0) {
            this.contactEmailNotfill = true;
        }
        else {
            this.contactEmailNotfill = false;
        }
    }
    Logout() {
        this.inituser.vendorLogout().then(logout => {
            console.log('id:null', logout);
            this.router.navigate(['pages/logout']);
        });
        // this.router.navigate(['/logout'])
    }
    login() {
        this.router.navigate(['/login']);
    }
};
VendorContactProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__.InituserService },
    { type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService }
];
VendorContactProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-vendor-contact-profile',
        template: _vendor_contact_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vendor_contact_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VendorContactProfilePage);



/***/ }),

/***/ 97149:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/vendor-contact-profile/vendor-contact-profile.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW5kb3ItY29udGFjdC1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 97445:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/vendor-contact-profile/vendor-contact-profile.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"4\" class=\"content1\">\n      \n        <ion-label class=\"menu\" (click)=\"Logout()\">Logout</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\">FAQ</ion-label>\n        <br>\n        <br>\n    <ion-label class=\"menu\">Contact Us</ion-label>\n      </ion-col>\n      <ion-col size=\"8\" class=\"content2\">\n      \n        <ion-row>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">1</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">2</div>\n          </div>\n          </ion-col>\n          <ion-col>\n            <ion-label style=\"margin-left: -75px;\" color=\"primary\">Contact details</ion-label>\n            <div class=\"horizonal\"></div>\n            <div class=\"vertical\"></div>\n            <div class=\"backnum\">\n            <div class=\"numbor\">3</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">4</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">5</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">6</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">7</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">8</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">9</div>\n          </div>\n          </ion-col>\n        </ion-row>\n        <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n       <br>\n        <h4 style=\"text-align: center;\">Please provide us with your up-to-date contact details to facilitate correspondence between us.</h4>\n<h4 style=\"text-align: center;color: red;\">The address you selected has been updated successfully</h4>\n<ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;text-align: center;justify-content: center;font-weight: bold;color: black;\">Your Contact Profile</ion-row>       \n<ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;text-align: center;justify-content: start;color: black;font-weight: bold;\">General Details</ion-row>       \n\n<div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n    First Name:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"John\" [(ngModel)]=\"vendorContact.first_name\"></ion-input>\n      <ion-label *ngIf=\"firstNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n    Last Name:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"Young\" [(ngModel)]=\"vendorContact.last_name\"></ion-input>\n      <!-- <ion-label *ngIf=\"countryNotfill\" style=\"color: red;\">*Please fill this field</ion-label> -->\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;color: red;\">\n  Relationship Type:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n     <ion-select style=\"border: 1px solid lightgray;\" [(ngModel)]=\"vendorContact.relationship_type\">\n       <ion-select-option  value=\"apples\">Sales</ion-select-option>\n       <ion-select-option>Marketing</ion-select-option>\n     </ion-select>\n      <ion-label *ngIf=\"reTypetNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  \n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nPhone Number:\n<p style=\"color: red;\">\n  (In xxxxxxxxxxx format)\n</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"12026625360\" [(ngModel)]=\"vendorContact.ph_no\"></ion-input>\n      <ion-label *ngIf=\"phoneNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nFax Number:\n<p>(In xxxxxxxxxxx format)</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nContact Email:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"john.young@yahoo.com\" [(ngModel)]=\"vendorContact.contact_email\"></ion-input>\n      <ion-label *ngIf=\"contactEmailNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n    <ion-col size=\"8\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"btnLogin\" (click)=\"moveToBack()\"> \n        <ion-icon name=\"chevron-back\"></ion-icon>\n        <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>Back\n      </ion-button>\n  \n      <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Next\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n\n</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">  \n  \n  <ion-slide>  \n    <img src=\"assets/jtp_logo.png\"/>  \n    <h2>Welcome to the <b>JavaTpoint</b></h2>  \n    <p>JavaTpoint offers Corporate Training, Summer Training, Online Training and Winter Training on Java, Android, Python, Oracle, PHP, and many more technologies.</p>  \n  </ion-slide>  \n\n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide> \n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide>   \n  </ion-slides>-->\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vendor-contact-profile_vendor-contact-profile_module_ts.js.map