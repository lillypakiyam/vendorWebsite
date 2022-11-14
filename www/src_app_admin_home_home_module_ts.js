"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_home_home_module_ts"],{

/***/ 83966:
/*!***************************************************!*\
  !*** ./src/app/admin/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 5190);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 81659:
/*!*******************************************!*\
  !*** ./src/app/admin/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 83966);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 5190);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 5190:
/*!*****************************************!*\
  !*** ./src/app/admin/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 28779);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 38270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);







let HomePage = class HomePage {
    constructor(router, inituser, api) {
        this.router = router;
        this.inituser = inituser;
        this.api = api;
        console.log(this.api.loginUserId);
    }
    ngOnInit() {
    }
    moveToAd() {
        this.router.navigate(['/admin/administrator-accounts']);
    }
    moveTo() {
        this.router.navigate(['admin/login']);
    }
    logout() {
        this.inituser.logout().then(logout => {
            console.log('id:null', logout);
            this.router.navigate(['admin/login']);
        });
        // this.api.logout().then(res=>{
        //   console.log('id:null', res)
        //   this.router.navigate(['admin/login']);
        // })
    }
    topnav() {
        this.router.navigate(['admin/top-level']);
    }
    vendornav() {
        this.router.navigate(['admin/vendor-info']);
    }
    inviteNav() {
        this.router.navigate(['admin/invitedvendors']);
    }
    purchase() {
        this.router.navigate(['admin/purchase-order']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_3__.InituserService },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 38270:
/*!******************************************************!*\
  !*** ./src/app/admin/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".back {\n  border-left: 2px solid white;\n  text-align-last: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBzdGFydDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 28779:
/*!******************************************************!*\
  !*** ./src/app/admin/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\" style=\"color: #d84fad;\" >Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"topnav()\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"purchase()\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"vendornav()\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav()\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"logout()\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n      \n          <p style=\"text-align: center;\">This is the VMS administrator's home page, welcome.</p>\n  <p style=\"text-align: center;\">Here is the outstanding purchase order report. Click the report table headings to sort.</p>\n  \n  <div class=\"login\" style=\"margin-top: 2px;\">\n  <ion-row class=\"back\" style=\"padding: 5px;font-weight: bold;\">Report: Details Of All Vendors With Outstanding Purchase Orders</ion-row>\n    <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\">\n        <ion-label class=\"highlight\">\n   Vendor Id\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\">\n        <ion-label class=\"highlight\">\n          Purchase Order\n               </ion-label>\n      </ion-col>\n      <ion-col class=\"back\" size=\"1\">\n        <ion-label class=\"highlight\">\n   Date\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\">\n        <ion-label class=\"highlight\">\n  Date Updated\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\">\n        <ion-label class=\"highlight\">\nRead/Downloaded?\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"back\">\n        <ion-label class=\"highlight\">\n  Time-Limit Exceeded?\n        </ion-label>\n      </ion-col>\n    </ion-row>\n<p>No records found.</p>\n\n\n<div class=\"login\" style=\"margin-top: 2px;\">\n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;margin-left: 50px;margin-right: 100px;\">\n    <ion-col class=\"back\" size=\"6\">\n      <ion-label style=\"text-align: right;\">\nActive vendors as of today:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"6\">\n    <ion-label class=\"highlight\">2513</ion-label>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;margin-left: 50px;margin-right: 100px;\">\n    <ion-col class=\"back\" size=\"6\">\n      <ion-label style=\"text-align: right;\">\n Emergency action items:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"6\">\n  <ion-label class=\"highlight\">8</ion-label>\n    </ion-col>\n  </ion-row>\n </div>\n  </div>\n  \n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_home_home_module_ts.js.map