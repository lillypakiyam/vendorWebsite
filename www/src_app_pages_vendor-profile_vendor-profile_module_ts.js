"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_vendor-profile_vendor-profile_module_ts"],{

/***/ 88822:
/*!***********************************************************************!*\
  !*** ./src/app/pages/vendor-profile/vendor-profile-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorProfilePageRoutingModule": () => (/* binding */ VendorProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _vendor_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-profile.page */ 51206);




const routes = [
    {
        path: '',
        component: _vendor_profile_page__WEBPACK_IMPORTED_MODULE_0__.VendorProfilePage
    }
];
let VendorProfilePageRoutingModule = class VendorProfilePageRoutingModule {
};
VendorProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VendorProfilePageRoutingModule);



/***/ }),

/***/ 39030:
/*!***************************************************************!*\
  !*** ./src/app/pages/vendor-profile/vendor-profile.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorProfilePageModule": () => (/* binding */ VendorProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vendor_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-profile-routing.module */ 88822);
/* harmony import */ var _vendor_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor-profile.page */ 51206);







let VendorProfilePageModule = class VendorProfilePageModule {
};
VendorProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vendor_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorProfilePageRoutingModule
        ],
        declarations: [_vendor_profile_page__WEBPACK_IMPORTED_MODULE_1__.VendorProfilePage]
    })
], VendorProfilePageModule);



/***/ }),

/***/ 51206:
/*!*************************************************************!*\
  !*** ./src/app/pages/vendor-profile/vendor-profile.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorProfilePage": () => (/* binding */ VendorProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vendor_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-profile.page.html?ngResource */ 61706);
/* harmony import */ var _vendor_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor-profile.page.scss?ngResource */ 37076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);








let VendorProfilePage = class VendorProfilePage {
    constructor(router, firestore, inituser, api) {
        this.router = router;
        this.firestore = firestore;
        this.inituser = inituser;
        this.api = api;
        this.emailNotfill = false;
        this.countryNotfill = false;
        this.streetNotfill = false;
        this.houseNotfill = false;
        this.postalNotfill = false;
        this.cityNotfill = false;
        this.phoneNotfill = false;
        this.vendorProfile = {
            Address: '',
            company_name: '',
            former_name: '',
            email: '',
            confirm_email: '',
            street: '',
            country: '',
            house: '',
            street2: '',
            postal_code: '',
            city: '',
            po_Box_postal: '',
            po_Box: '',
            district: '',
            Region_state: '',
            ph_no: '',
            fax_No: ''
        };
        this.emailNotfill = false;
    }
    ngOnInit() {
    }
    moveToBack() {
        this.router.navigate(['pages/password-change']);
    }
    moveTo() {
        this.loggedInVendor = this.inituser.getVendorData();
        const profile = {
            id: this.loggedInVendor.id,
            Address: this.vendorProfile.Address,
            Company_name: this.vendorProfile.company_name,
            former_name: this.vendorProfile.former_name,
            V_email: this.vendorProfile.email,
            confim_email: this.vendorProfile.confirm_email,
            street: this.vendorProfile.street,
            country: this.vendorProfile.country,
            house: this.vendorProfile.house,
            street2: this.vendorProfile.street2,
            postal_code: this.vendorProfile.postal_code,
            city: this.vendorProfile.city,
            po_postal: this.vendorProfile.po_Box_postal,
            po_Box: this.vendorProfile.po_Box,
            district: this.vendorProfile.district,
            region_state: this.vendorProfile.Region_state,
            ph_no: this.vendorProfile.ph_no,
            fax_no: this.vendorProfile.fax_No
        };
        if (this.vendorProfile.country.length !== 0 && this.vendorProfile.email.length !== 0 && this.vendorProfile.street.length !== 0 &&
            this.vendorProfile.house.length !== 0 && this.vendorProfile.city.length !== 0 && this.vendorProfile.postal_code.length !== 0 &&
            this.vendorProfile.ph_no.length !== 0) {
            this.firestore.update('vendorAdd', profile.id, profile).then(res => {
                this.router.navigate(['pages/vendor-contact-profile']);
            });
        }
        console.log(this.vendorProfile.country, this.vendorProfile.email, this.vendorProfile.street);
        this.NewPassword();
    }
    NewPassword() {
        if (this.vendorProfile.email.length === 0) {
            this.emailNotfill = true;
        }
        else {
            this.emailNotfill = false;
        }
        if (this.vendorProfile.country.length === 0) {
            this.countryNotfill = true;
        }
        else {
            this.countryNotfill = false;
        }
        if (this.vendorProfile.street.length === 0) {
            this.streetNotfill = true;
        }
        else {
            this.streetNotfill = false;
        }
        if (this.vendorProfile.house.length === 0) {
            this.houseNotfill = true;
        }
        else {
            this.houseNotfill = false;
        }
        if (this.vendorProfile.postal_code.length === 0) {
            this.postalNotfill = true;
        }
        else {
            this.postalNotfill = false;
        }
        if (this.vendorProfile.city.length === 0) {
            this.cityNotfill = true;
        }
        else {
            this.cityNotfill = false;
        }
        if (this.vendorProfile.ph_no.length === 0) {
            this.phoneNotfill = true;
        }
        else {
            this.phoneNotfill = false;
        }
    }
    login() {
        this.router.navigate(['/login']);
    }
    moveToPsw() {
        this.router.navigate(['/forget-psw']);
    }
    moveToId() {
        this.router.navigate(['/forget-vendor-id']);
    }
};
VendorProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_4__.InituserService },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
VendorProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-vendor-profile',
        template: _vendor_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vendor_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VendorProfilePage);



/***/ }),

/***/ 37076:
/*!**************************************************************************!*\
  !*** ./src/app/pages/vendor-profile/vendor-profile.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW5kb3ItcHJvZmlsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 61706:
/*!**************************************************************************!*\
  !*** ./src/app/pages/vendor-profile/vendor-profile.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row class=\"row1\">\n      <ion-col size=\"4\" class=\"content1\">\n      \n        <ion-label class=\"menu\" (click)=\"login()\">Login</ion-label>\n        <br>\n        <br>\n        <ion-label class=\"menu\" (click)=\"moveToPsw()\">Forget Password</ion-label>\n        <br>\n        <br>\n    <ion-label class=\"menu\" (click)=\"moveToId()\">Forget Content ID</ion-label>\n    <br>\n    <br>\n    <br>\n    <ion-label class=\"menu\">Contact Us</ion-label>\n      </ion-col>\n      <ion-col size=\"8\" class=\"content2\">\n        <ion-row>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">1</div>\n          </div>\n          </ion-col>\n          <ion-col>\n             \n            <ion-label style=\"margin-left: -15px;\" color=\"primary\">Profile</ion-label>\n            <div class=\"horizonal\"></div>\n            <div class=\"vertical\"></div>\n            <div class=\"backnum\">\n            <div class=\"numbor\">2</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">3</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">4</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">5</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">6</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">7</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">8</div>\n          </div>\n          </ion-col>\n          <ion-col class=\"mar\">\n            <div class=\"backnum\">\n            <div class=\"numbor1\">9</div>\n          </div>\n          </ion-col>\n        </ion-row>\n        <ion-progress-bar value=\"0.1\" class=\"bar1\"></ion-progress-bar>\n       <br>\n       <h4 style=\"text-align: center;\">Please provide us with your company details below</h4>\n        <h4 style=\"text-align: center;font-weight: bold;color: red;\">Your password has been changed successfully.</h4>\n<br>\n        <ion-row class=\"back\" style=\"text-align: center;justify-content: center;padding: 5px;font-weight: bold;color: black;\">Your Company Profile</ion-row>\n<ion-row class=\"back\" style=\"\npadding: 5px;margin-top: 2px;justify-content: start;color: black;font-weight: bold;\">General Deatils</ion-row>       \n<div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"wholeclass\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"text-align: right;\">\n      Address Type:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" [(ngModel)]=\"vendorProfile.Address\" placeholder=\"Company registration address\"></ion-input>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;text-align: right;\">\n          Country:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n<ion-select style=\"border: 1px solid lightgray;\" placeholder=\"select country\" [(ngModel)]=\"vendorProfile.country\" >\n  <ion-select-option>Belgium</ion-select-option>\n  <ion-select-option>Belum</ion-select-option>\n    </ion-select>\n      <ion-label *ngIf=\"countryNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nCompany Name:\n<p>(if the Company Name has changed please contact us immediately)</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"TEST MAY 6\" [(ngModel)]=\"vendorProfile.company_name\" ></ion-input>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nFormer Name:\n<p>(if applicable)</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"TEST MAY 6\" [(ngModel)]=\"vendorProfile.former_name\"></ion-input>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nEmail Address:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"vendor.management@ses.com\" [(ngModel)]=\"vendorProfile.email\"></ion-input>\n      <ion-label *ngIf=\"emailNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nConfirm Email Address:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"vendor.management@ses.com\" [(ngModel)]=\"vendorProfile.confirm_email\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\" style=\"margin-top: 2px;padding: 5px;justify-content: start;color: black;font-weight: bold;\">\nAddress Details\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nStreet\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"Paradise Road\" [(ngModel)]=\"vendorProfile.street\"></ion-input>\n      <ion-label *ngIf=\"streetNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nHouse#:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"1111\" [(ngModel)]=\"vendorProfile.house\"></ion-input>\n      <ion-label *ngIf=\"houseNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nStreet 2:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"\" [(ngModel)]=\"vendorProfile.street2\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nPostal Code:\n<p style=\"color: red;\">(Please put the postal code without a country code in front)</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"89109\" [(ngModel)]=\"vendorProfile.postal_code\"></ion-input>\n      <ion-label *ngIf=\"postalNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nCity:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"BRUSSELS\" [(ngModel)]=\"vendorProfile.city\"></ion-input>\n      <ion-label *ngIf=\"cityNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nPO BOX Postal Code:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"\" [(ngModel)]=\"vendorProfile.po_Box_postal\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nPO BOX:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"\" [(ngModel)]=\"vendorProfile.po_Box\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nDistrict:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"\" [(ngModel)]=\"vendorProfile.district\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nRegion/State:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"\" [(ngModel)]=\"vendorProfile.Region_state\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"color: red;\">\nPhone Number:\n<p style=\"color: red;\">\n  (In xxxxxxxxxxx format)\n</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"32702943691\" [(ngModel)]=\"vendorProfile.ph_no\"></ion-input>\n      <ion-label *ngIf=\"phoneNotfill\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n    <ion-col class=\"back\" size=\"3\">\n      <ion-label style=\"\">\nFax Number:\n<p>(In xxxxxxxxxxx format)</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-input class=\"input\" placeholder=\"\" [(ngModel)]=\"vendorProfile.fax_No\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\" style=\"margin-top: 2px;justify-content: end;\">\n    <ion-col size=\"8\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"btnLogin\" (click)=\"moveToBack()\">\n        <ion-icon name=\"chevron-back\"></ion-icon> \n        <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n        Back\n      </ion-button>\n      <!-- [disabled]=\" !vendorProfile.email || !vendorProfile.country ||\n      !vendorProfile.houses || !vendorProfile.street\" -->\n      <ion-button class=\"btnLogin\" (click)=\"moveTo()\">Next\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</div>\n\n</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<!--<ion-slides pager=\"true\" [options]=\"slideOpts\">  \n  \n  <ion-slide>  \n    <img src=\"assets/jtp_logo.png\"/>  \n    <h2>Welcome to the <b>JavaTpoint</b></h2>  \n    <p>JavaTpoint offers Corporate Training, Summer Training, Online Training and Winter Training on Java, Android, Python, Oracle, PHP, and many more technologies.</p>  \n  </ion-slide>  \n\n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide> \n  <ion-slide>  \n    <img src=\"assets/ionic_logo1.png\"/>  \n    <h2>What is Ionic?</h2>  \n    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>  \n  </ion-slide>   \n  </ion-slides>-->\n\n<ion-footer style=\"position: relative;\">\n  <div class=\"footer\"></div>\n  <ion-row>\n    <ion-col>\n<ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n</ion-col>\n\n \n  \n<ion-col></ion-col>\n<ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n<ion-col>\n  <ion-row>\n  <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n  \n  <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n  \n\n  <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n\n  <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n  <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n</ion-row>\n</ion-col>\n</ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vendor-profile_vendor-profile_module_ts.js.map