"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_invitedvendors_invitedvendors_module_ts"],{

/***/ 78379:
/*!***********************************************************************!*\
  !*** ./src/app/admin/invitedvendors/invitedvendors-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitedvendorsPageRoutingModule": () => (/* binding */ InvitedvendorsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _invitedvendors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitedvendors.page */ 31422);




const routes = [
    {
        path: '',
        component: _invitedvendors_page__WEBPACK_IMPORTED_MODULE_0__.InvitedvendorsPage
    }
];
let InvitedvendorsPageRoutingModule = class InvitedvendorsPageRoutingModule {
};
InvitedvendorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvitedvendorsPageRoutingModule);



/***/ }),

/***/ 50167:
/*!***************************************************************!*\
  !*** ./src/app/admin/invitedvendors/invitedvendors.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitedvendorsPageModule": () => (/* binding */ InvitedvendorsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _invitedvendors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitedvendors-routing.module */ 78379);
/* harmony import */ var _invitedvendors_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitedvendors.page */ 31422);







let InvitedvendorsPageModule = class InvitedvendorsPageModule {
};
InvitedvendorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invitedvendors_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvitedvendorsPageRoutingModule
        ],
        declarations: [_invitedvendors_page__WEBPACK_IMPORTED_MODULE_1__.InvitedvendorsPage]
    })
], InvitedvendorsPageModule);



/***/ }),

/***/ 31422:
/*!*************************************************************!*\
  !*** ./src/app/admin/invitedvendors/invitedvendors.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitedvendorsPage": () => (/* binding */ InvitedvendorsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invitedvendors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitedvendors.page.html?ngResource */ 22415);
/* harmony import */ var _invitedvendors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitedvendors.page.scss?ngResource */ 10441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/util.service */ 19915);







let InvitedvendorsPage = class InvitedvendorsPage {
    constructor(router, util, api) {
        this.router = router;
        this.util = util;
        this.api = api;
        this.vendordate = [];
        this.vendorName = [];
        this.vendorid = [];
        this.api.getallVendor().subscribe(user => {
            console.log(user);
            this.vendorInvite = user;
            this.vendorName.push(user);
            console.log(this.vendorInvite);
        });
    }
    ngOnInit() {
    }
    // moveToAd(){
    //   this.router.navigate(['/administrator-accounts'])
    // }
    moveToInVendor() {
        this.router.navigate(['/invitedvendors']);
    }
    moveToHome() {
        this.router.navigate(['/home']);
    }
    inviteAnother() {
        // this.router.navigate(['admin/addvendor'])
        this.util.goForward('admin/addvendor');
    }
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
    searchbyDate(date, tdate) {
        // this.today = moment().format('ll');
        this.vendordate = [];
        console.log(date, tdate);
        if (date !== undefined && tdate !== undefined) {
            this.api.getSearchDate(date, tdate).subscribe(user => {
                console.log(user, 'use');
                this.vendordate.push(user);
                this.vendorInvite = this.vendordate;
                console.log(this.vendorInvite, this.vendordate.length);
            });
        }
        else {
            this.api.getallVendor().subscribe(user => {
                console.log(user);
                this.vendorInvite = user;
                console.log(this.vendorInvite, this.vendorInvite.length);
            });
        }
    }
    searchElement(eve) {
        // console.log(eve, eve.srcElement.value)
        this.vendorName.forEach(res => {
            res.map(data => {
                this.vendorid.push(data.companyname);
                console.log(this.vendorid);
                console.log(data.companyname.toLowerCase().indexOf(eve.srcElement.value.toLowerCase()) > -1);
            });
            // return res.toLowerCase().indexOf(eve.srcElement.value.toLowerCase()) > -1;
        });
    }
    vendorinfo(data) {
        console.log(data);
        this.api.tempVendor = data;
        this.router.navigate(['admin/deletedvendor']);
    }
};
InvitedvendorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
InvitedvendorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-invitedvendors',
        template: _invitedvendors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invitedvendors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvitedvendorsPage);



/***/ }),

/***/ 10441:
/*!**************************************************************************!*\
  !*** ./src/app/admin/invitedvendors/invitedvendors.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".head {\n  text-align: start;\n  background: #d9d9ff;\n  margin-left: 2px;\n}\n\n.back {\n  background: #d9d9ff;\n  text-align-last: center;\n}\n\n.back1 {\n  background: #d9d9ff;\n}\n\n.highlight {\n  color: var(--ion-color-secondary);\n}\n\n.head1 {\n  text-align: start;\n  background: rgb(252, 250, 250);\n  margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZWR2ZW5kb3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGlDQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJpbnZpdGVkdmVuZG9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZHtcclxuICAgIHRleHQtYWxpZ246c3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweFxyXG59XHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZDogI2Q5ZDlmZjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG59XHJcbi5iYWNrMXtcclxuICAgIGJhY2tncm91bmQ6ICNkOWQ5ZmY7ICBcclxufVxyXG4uaGlnaGxpZ2h0e1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcbi5oZWFkMXtcclxuICAgIHRleHQtYWxpZ246c3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTAsIDI1MCk7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG59Il19 */";

/***/ }),

/***/ 22415:
/*!**************************************************************************!*\
  !*** ./src/app/admin/invitedvendors/invitedvendors.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"1\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"inviteNav('home')\" >Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('toplevel')\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('purchase')\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('vendorinform')\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('invitedvendors')\" style=\"color: #d84fad;\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('invited')\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"11\" class=\"content2\">\n      <h6 style=\"text-align: center;\">Here is the list of invited vendors.</h6>\n          <ion-card style=\"width:700px;margin-left:20%;margin-right:20%;\">\n            <ion-row class=\"back\">\n              \n              <ion-col>\n            \n              </ion-col>\n              <ion-col>\n                <ion-button class=\"btnLogin\" (click)=\"inviteAnother()\">\n                 Invite another</ion-button>\n                 \n                <ion-button class=\"btnLogin\" >Download as CSV\n             \n              </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\" background: #d9d9ff;text-align: left;padding-left: 10px;margin-top: 2px;\">\n             <p style=\"color: black;font-weight: bold;text-align: left;\">Search for vendors by Date:</p>\n            </ion-row>\n            <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n              <ion-col class=\"back\" size=\"2\">\n                <ion-label style=\"text-align: right;color: black;\">\n                  From Date:\n                </ion-label>\n              </ion-col>\n\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-input\n                    value=\"{{ date | date: 'dd.MM.yyyy' }}\"\n                    id=\"date\"\n                    class=\"ion-text-end\" placeholder=\"Date\" clearInput></ion-input>\n                  <ion-popover trigger=\"date\" style=\"width: 5000px;\">\n                    <ng-template>\n                      <ion-datetime presentation=\"date\" [(ngModel)]=\"date\" locale=\"sl-SI\"></ion-datetime>\n                    </ng-template>\n                  </ion-popover>\n                </ion-item>\n              </ion-col>\n\n              <ion-col class=\"back\" size=\"2\">\n                <ion-label style=\"text-align: right;color: black;\">\n                To Date:\n                </ion-label>\n              </ion-col>\n\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-input\n                    value=\"{{ dates | date: 'dd.MM.yyyy' }}\"\n                    id=\"dates\"\n                    class=\"ion-text-end\" placeholder=\"Date\" clearInput></ion-input>\n                  <ion-popover trigger=\"dates\" style=\"width: 5000px;\">\n                    <ng-template>\n                      <ion-datetime\n                        presentation=\"date\"\n                        [(ngModel)]=\"dates\"\n                        locale=\"sl-SI\">\n                      </ion-datetime>\n                    </ng-template>\n                  </ion-popover>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"2\" class=\"back\">\n                <ion-button class=\"btnLogin\" (click)=\"searchbyDate(date, dates)\">Search</ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\" background: #d9d9ff;text-align: left;padding-left: 10px;margin-top: 2px;\">\n           <ion-col size=\"5\">   <p style=\"color: black;font-weight: bold;\">Search for vendors by Name or ID:</p>\n           </ion-col>\n\n            </ion-row>\n            <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n              <ion-col class=\"back\" size=\"4\">\n                <ion-label style=\"color: black;text-align: left;\">\n        Full or partial Vendor Name or ID:\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n               <ion-input class=\"input\" inputmode=\"search\" (ionInput)=\"searchElement($event)\"></ion-input>\n              </ion-col>\n              <ion-col size=\"2\" class=\"back\">\n                <ion-button class=\"btnLogin\" >Search</ion-button>\n              </ion-col>\n            </ion-row>\n           \n          </ion-card>\n          \n\n<div class=\"login\" style=\"\">\n\n  <ion-row class=\"wholeclass\">\n       <ion-col class=\"back\" size=\"1\" style=\"text-align-last:start ;\">\n      <ion-label class=\"highlight\">\n   Temp.ID\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"1\">\n   <ion-label class=\"highlight\">Company</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"2\">\n  <ion-label class=\"highlight\">Company Email</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"2\">\n<ion-label class=\"highlight\">\n  Requested Email\n</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"1\">\n      <ion-label>Invoice Exists?</ion-label>\n    </ion-col>\n    <ion-col class=\"head\">\n      <ion-label class=\"highlight\">\n      Invited\n      </ion-label>\n      </ion-col>\n      <ion-col class=\"head\">\n        <ion-label class=\"highlight\">\n    Last Login\n        </ion-label>\n        </ion-col>\n        <ion-col class=\"head\">\n          <ion-label class=\"highlight\">\n     Login Level\n          </ion-label>\n          </ion-col>\n          <ion-col class=\"head\" size=\"2\">\n            <ion-label class=\"highlight\">\n            Invited By\n            </ion-label>\n    </ion-col>\n  </ion-row>\n  \n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\" *ngFor=\"let vendor of vendorInvite\">\n    <ion-col class=\"head1\" size=\"1\" style=\"text-align-last:start ;\">\n   <ion-label class=\"highlight\" (click)=\"vendorinfo(vendor)\">\n{{vendor.id}}\n   </ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"1\">\n   <ion-label class=\"\">{{vendor.companyname}}</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"2\">\n<ion-label class=\"highlight\">{{vendor.companyEmail}}</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"2\">\n<ion-label class=\"highlight\">\n{{vendor.requestEmail}}</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"1\">\n   <ion-label></ion-label>\n </ion-col>\n <ion-col class=\"head1\">\n   <ion-label>\n  {{vendor.invite_Date}}\n   </ion-label>\n   </ion-col>\n   <ion-col class=\"head1\">\n     <ion-label>\n {{vendor.login_date !== null ?vendor.login_date : '0' }}\n     </ion-label>\n     </ion-col>\n     <ion-col class=\"head1\">\n       <ion-label class=\"highlight\">\n0\n<!-- login level -->\n     </ion-label>\n       </ion-col>\n       <ion-col class=\"head1\" size=\"2\">\n         <ion-label class=\"highlight\">\n     {{vendor.invited_by}}\n         </ion-label>\n  </ion-col>\n </ion-row>\n\n<!-- <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n  <ion-col class=\"back\" size=\"1\" style=\"text-align-last:start ;\">\n <ion-label class=\"highlight\">\nTEMP002868\n </ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"1\">\n<ion-label class=\"\">MY CARRIO</ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"2\">\n<ion-label class=\"highlight\">hironraja.p@gmail.com</ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"2\">\n<ion-label class=\"highlight\">\nba.bhavanee@gmail.com\n</ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"1\">\n <ion-label></ion-label>\n</ion-col>\n<ion-col class=\"head\">\n <ion-label class=\"\">\n 2022-09-02\n </ion-label>\n </ion-col>\n <ion-col class=\"head\">\n   <ion-label class=\"\">\n0000-00-00  00:00:00\n   </ion-label>\n   </ion-col>\n   <ion-col class=\"head\">\n     <ion-label class=\"highlight\">\n0\n     </ion-label>\n     </ion-col>\n     <ion-col class=\"head\" size=\"2\">\n       <ion-label class=\"highlight\">\n      bhavanee.ambati@ses.com\n       </ion-label>\n</ion-col>\n</ion-row> -->\n\n<ion-row class=\"back1\" style=\"margin-top: 2px;\">\n  <ion-col size=\"2\">\n\n    <ion-button class=\"btnLogin\" >\n          <ion-icon name=\"chevron-back\"></ion-icon>\n      <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n      Previous page</ion-button>\n  </ion-col>\n  <ion-col size=\"8\" style=\"text-align: center;vertical-align: sub;\">\n<ion-label style=\"vertical-align: sub;\">You are on page 1 of 1</ion-label>\n  </ion-col>\n  <ion-col size=\"2\">\n\n    <ion-button class=\"btnLogin\" >Next page\n      <ion-icon name=\"chevron-forward\"></ion-icon>\n      <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n    </ion-button>\n  </ion-col>\n</ion-row>\n\n\n </div>\n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_invitedvendors_invitedvendors_module_ts.js.map