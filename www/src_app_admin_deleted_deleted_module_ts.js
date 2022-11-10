"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_deleted_deleted_module_ts"],{

/***/ 13739:
/*!*********************************************************!*\
  !*** ./src/app/admin/deleted/deleted-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedPageRoutingModule": () => (/* binding */ DeletedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _deleted_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted.page */ 3976);




const routes = [
    {
        path: '',
        component: _deleted_page__WEBPACK_IMPORTED_MODULE_0__.DeletedPage
    }
];
let DeletedPageRoutingModule = class DeletedPageRoutingModule {
};
DeletedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeletedPageRoutingModule);



/***/ }),

/***/ 81008:
/*!*************************************************!*\
  !*** ./src/app/admin/deleted/deleted.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedPageModule": () => (/* binding */ DeletedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _deleted_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted-routing.module */ 13739);
/* harmony import */ var _deleted_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted.page */ 3976);







let DeletedPageModule = class DeletedPageModule {
};
DeletedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _deleted_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeletedPageRoutingModule
        ],
        declarations: [_deleted_page__WEBPACK_IMPORTED_MODULE_1__.DeletedPage]
    })
], DeletedPageModule);



/***/ }),

/***/ 3976:
/*!***********************************************!*\
  !*** ./src/app/admin/deleted/deleted.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedPage": () => (/* binding */ DeletedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deleted_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleted.page.html?ngResource */ 11199);
/* harmony import */ var _deleted_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted.page.scss?ngResource */ 78507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);





let DeletedPage = class DeletedPage {
    constructor(api) {
        this.api = api;
        this.api.getalldeleVendor().subscribe(delet => {
            console.log(delet);
            this.deleteVendor = delet;
            console.log(this.deleteVendor);
        });
    }
    ngOnInit() {
    }
};
DeletedPage.ctorParameters = () => [
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
DeletedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-deleted',
        template: _deleted_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_deleted_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeletedPage);



/***/ }),

/***/ 78507:
/*!************************************************************!*\
  !*** ./src/app/admin/deleted/deleted.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".back {\n  border-left: 2px solid white;\n  text-align-last: start;\n}\n\n.highlight1 {\n  text-decoration: underline;\n}\n\n.background {\n  background: #fbfaff;\n}\n\n.background1 {\n  background: #f3f3ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKIiwiZmlsZSI6ImRlbGV0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBzdGFydDtcclxufSBcclxuLmhpZ2hsaWdodDF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYWZmO1xyXG4gICBcclxufVxyXG4uYmFja2dyb3VuZDF7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2ZmO1xyXG59Il19 */";

/***/ }),

/***/ 11199:
/*!************************************************************!*\
  !*** ./src/app/admin/deleted/deleted.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"2\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"moveToHome()\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToTopLevel()\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToPurchase()\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToVendorInfo()\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToInVendor()\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"logout()\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"10\" class=\"content2\">\n      \n          <p style=\"text-align: center;\">Here is the report. Click the report table headings to sort.</p>\n          <ion-row class=\"back\" style=\"margin-left: 10%;margin-right: 10%;text-align-last: end;\">\n            <ion-col size=\"6\">\n          \n            </ion-col>\n           \n            <ion-col size=\"6\">\n              <ion-button class=\"btnLogin\" (click)=\"moveToTopLevel()\">\n                <ion-icon name=\"chevron-back\"></ion-icon>\n                <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n                Back</ion-button>\n              <ion-button class=\"btnLogin\" >Download as CSV</ion-button>\n            </ion-col>\n          </ion-row>\n          <br>\n  <div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"back\" style=\"padding: 5px;font-weight: bold;\">Report: Details Of All Invited Vendors Who Were Deleted </ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"2\">\n        <ion-label class=\"highlight1\">\n  Vendor Temp Id\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label class=\"highlight1\">\n        Company\n               </ion-label>\n      </ion-col>\n      <ion-col class=\"back\" size=\"1\">\n        <ion-label class=\"highlight1\">\n   Invited\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\" size=\"1\">\n        <ion-label class=\"highlight1\">\n  Invited by\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\" size=\"3\">\n        <ion-label class=\"highlight1\">\nRequester e-mail\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\" size=\"1\">\n        <ion-label class=\"highlight1\">\nDeleted\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\" size=\"1\">\n        <ion-label class=\"highlight1\">\nDeleted by\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 2px;\" *ngFor=\"let dele of deleteVendor\">\n      <ion-col class=\"background\" size=\"2\">\n        <ion-label style=\"text-transform: uppercase;\">\n <!-- temp002861 -->\n    {{dele.temporaryId}}\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"background back\" size=\"3\" (click)=\"moveToCP()\">\n        <ion-label style=\"text-transform: uppercase;\">\n<!-- sanderspanenburg, -->\n    {{dele.companyname}}\n               </ion-label>\n\n<p style=\"margin-top: -2px;\">{{dele.companyEmail}}</p>              \n</ion-col>\n      <ion-col class=\"background back\" size=\"1\">\n        <ion-label>\n<!-- 2019-02-12 10:03:25 -->\n     {{dele.invite_Date}}\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"background back\" size=\"1\">\n        <ion-label style=\"text-transform:capitalize;\">\n   {{dele.invited_name}}\n        </ion-label>\n      </ion-col>\n      \n      <ion-col class=\"background back\" size=\"3\">\n        <ion-label>\n   <!-- matthijis.holstein@ses.com -->\n {{dele.requestEmail}}\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back background\" size=\"1\" >\n<ion-label>{{dele.delete_date}}</ion-label>\n      </ion-col>\n      <ion-col class=\"back background\" size=\"1\" >\n        <ion-label style=\"text-transform: capitalize;\">\n          {{dele.delete_name}}\n\n        </ion-label>\n              </ion-col>\n    </ion-row>\n\n    <!-- <ion-row style=\"margin-top: 2px;\">\n      <ion-col class=\"background1\" size=\"2\">\n        <ion-label style=\"text-transform: uppercase;\">\n temp002861\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"background1 back\" size=\"3\">\n        <ion-label style=\"text-transform: uppercase;\">\nsanderspanenburg,\n               </ion-label>\n\n<p style=\"margin-top: -2px;\">sanderspanenburg@gmail.com</p></ion-col>\n      <ion-col class=\"background1 back\" size=\"1\">\n        <ion-label>\n2019-02-12 10:03:25\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"background1 back\" size=\"1\">\n        <ion-label style=\"text-transform:capitalize;\">\n        Bhavanee\n        </ion-label>\n      </ion-col>\n      \n      <ion-col class=\"background1 back\" size=\"3\">\n        <ion-label>\n       matthijis.holstein@ses.com\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back background1\" size=\"1\" >\n      <ion-label>2020-06-24 11:22:46</ion-label>\n      </ion-col>\n      <ion-col class=\"back background1\" size=\"1\" >\n        <ion-label style=\"text-transform: capitalize;\">\n          Bhavanee\n        </ion-label>\n    </ion-col>\n  </ion-row> -->\n\n  \n    \n  </div>\n  \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_deleted_deleted_module_ts.js.map