"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_vendor-info_vendor-info_module_ts"],{

/***/ 64153:
/*!*****************************************************************!*\
  !*** ./src/app/admin/vendor-info/vendor-info-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorInfoPageRoutingModule": () => (/* binding */ VendorInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _vendor_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-info.page */ 13476);




const routes = [
    {
        path: '',
        component: _vendor_info_page__WEBPACK_IMPORTED_MODULE_0__.VendorInfoPage
    }
];
let VendorInfoPageRoutingModule = class VendorInfoPageRoutingModule {
};
VendorInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VendorInfoPageRoutingModule);



/***/ }),

/***/ 48067:
/*!*********************************************************!*\
  !*** ./src/app/admin/vendor-info/vendor-info.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorInfoPageModule": () => (/* binding */ VendorInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vendor_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-info-routing.module */ 64153);
/* harmony import */ var _vendor_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor-info.page */ 13476);







let VendorInfoPageModule = class VendorInfoPageModule {
};
VendorInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vendor_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorInfoPageRoutingModule
        ],
        declarations: [_vendor_info_page__WEBPACK_IMPORTED_MODULE_1__.VendorInfoPage]
    })
], VendorInfoPageModule);



/***/ }),

/***/ 13476:
/*!*******************************************************!*\
  !*** ./src/app/admin/vendor-info/vendor-info.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorInfoPage": () => (/* binding */ VendorInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vendor_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor-info.page.html?ngResource */ 59358);
/* harmony import */ var _vendor_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor-info.page.scss?ngResource */ 71200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ 39573);







let VendorInfoPage = class VendorInfoPage {
    constructor(router, navcntrl, api) {
        this.router = router;
        this.navcntrl = navcntrl;
        this.api = api;
        this.vendorUser = [];
    }
    ngOnInit() {
        this.getvenodrdetails();
    }
    getvenodrdetails() {
        // console.log(this.api.adminId)
        this.vendorUser = [];
        this.api.getallvendorAdd().subscribe(res => {
            console.log('vendor', res);
            res.map(user => {
                console.log('user name', user.name);
                this.vendorUser.push(user);
                // this.adminName= user.name
                // this.adminEmail= user.email
            });
            console.log('res', res, res.name);
            // this.adminUser.push(res)
        });
    }
    moveToAd() {
        this.router.navigate(['/admin/administrator-accounts']);
    }
    moveToInVendor() {
        this.router.navigate(['admin/invitedvendors']);
    }
    moveToHome() {
        this.router.navigate(['admin/home']);
    }
    moveToAddVendor() {
        this.router.navigate(['admin/addvendor']);
    }
    moveToTopLevel() {
        this.router.navigate(['admin/top-level']);
    }
    moveToPurchase() {
        this.router.navigate(['admin/purchase-order']);
        // this.router.navigate(['/purchase-order'])
    }
    moveToLoginInfo(data) {
        // this.router.navigate(['admin/login-info'],{
        //   queryParams:{
        //     item:data
        //   }
        // });
        this.navcntrl.navigateRoot('admin/login-info', { state: { item: data } });
    }
};
VendorInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
VendorInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-vendor-info',
        template: _vendor_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vendor_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VendorInfoPage);



/***/ }),

/***/ 71200:
/*!********************************************************************!*\
  !*** ./src/app/admin/vendor-info/vendor-info.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  min-height: 100px;\n  background-image: linear-gradient(to right, hsl(319deg, 64%, 58%), hsl(206deg, 68%, 61%));\n}\n\n.img {\n  height: 99px;\n  margin-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 80%;\n}\n\n.menu {\n  color: black;\n}\n\n.menu:hover {\n  color: hsl(319deg, 64%, 58%);\n}\n\nion-footer {\n  position: relative;\n}\n\n.footer {\n  min-height: 50px;\n  position: relative;\n  background-image: linear-gradient(to right, hsl(319deg, 64%, 58%), hsl(206deg, 68%, 61%));\n}\n\n.icon {\n  height: 25px;\n  width: 25px;\n  padding-left: 10px;\n}\n\n.wholeclass {\n  background: #fbfbfe;\n}\n\n.input {\n  border: 1px solid lightgray;\n}\n\n.content1 {\n  flex-wrap: nowrap;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.content2 {\n  flex-wrap: nowrap;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.numbor {\n  border-radius: 46%;\n  border: 1px solid var(--ion-color-primary);\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.numbor1 {\n  border-radius: 50%;\n  border: 1px solid lightgray;\n  text-align: center;\n}\n\n.backnum {\n  padding-left: 35px;\n  padding-right: 35px;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-slide > h2 {\n  margin-top: 2.8rem;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n}\n\n.mar {\n  margin-top: 40px;\n}\n\n.vertical {\n  background-color: var(--ion-color-primary);\n  width: 2px;\n  height: 20px;\n  margin-left: 50%;\n}\n\n.horizonal {\n  background-color: var(--ion-color-primary);\n  width: 20px;\n  height: 2px;\n  margin-left: 31%;\n}\n\n.head {\n  border-left: 2px solid white;\n  background: #d9d9ff;\n  text-align: center;\n}\n\n.head1 {\n  border-left: 2px solid white;\n}\n\n.width {\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EseUZBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLDRCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlGQUFBO0FBTUo7O0FBSEU7RUFDRSxZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0FBUTdCOztBQUxBO0VBQ0ksbUJBQUE7QUFRSjs7QUFOQTtFQUNJLDJCQUFBO0FBU0o7O0FBTEE7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQVNKOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBO0VBRUksa0JBQUE7RUFDQSxtQkFBQTtBQVNKOztBQU5BO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQVNKOztBQVBFO0VBQ0UsY0FBQTtBQVVKOztBQVJFO0VBQ0Usa0JBQUE7QUFXSjs7QUFURTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVlKOztBQVZFO0VBQ0ksZ0JBQUE7QUFhTjs7QUFYRTtFQUNFLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWNKOztBQVpBO0VBQ0ksMENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBZUo7O0FBWkE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFlRjs7QUFiQTtFQUNFLDRCQUFBO0FBZ0JGOztBQWJBO0VBQ0ksWUFBQTtBQWdCSiIsImZpbGUiOiJ2ZW5kb3ItaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LGhzbCgzMTksIDY0LCA1OCksaHNsKDIwNiwgNjgsIDYxKSk7XHJcbiAgfVxyXG4uaW1ne1xyXG4gICAgaGVpZ2h0OiA5OXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1yaWdodDogODAlO1xyXG59XHJcbi5tZW51e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tZW51OmhvdmVye1xyXG4gICAgY29sb3I6IGhzbCgzMTksIDY0LCA1OCk7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9vdGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsaHNsKDMxOSwgNjQsIDU4KSxoc2woMjA2LCA2OCwgNjEpKTtcclxuICAgIFxyXG4gIH1cclxuICAuaWNvbntcclxuICAgIGhlaWdodDogMjVweDt3aWR0aDogMjVweDtwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi53aG9sZWNsYXNze1xyXG4gICAgYmFja2dyb3VuZDogI2ZiZmJmZTtcclxufVxyXG4uaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgXHJcbiAgICBcclxufVxyXG4uY29udGVudDF7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmNvbnRlbnQye1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG5cclxuLm51bWJvcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ2JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLm51bWJvcjF7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJhY2tudW17XHJcbiBcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcblxyXG59XHJcbjpyb290IHsgIFxyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDsgIFxyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDsgIFxyXG4gIH0gIFxyXG4gIC5zd2lwZXItc2xpZGUgeyAgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgIFxyXG4gIH0gIFxyXG4gIGlvbi1zbGlkZSA+IGgyIHsgIFxyXG4gICAgbWFyZ2luLXRvcDogMi44cmVtOyAgXHJcbiAgfSAgXHJcbiAgaW9uLXNsaWRlID4gaW1nIHsgIFxyXG4gICAgbWF4LWhlaWdodDogNTAlOyAgXHJcbiAgICBtYXgtd2lkdGg6IDYwJTsgIFxyXG4gICAgbWFyZ2luOiAzNnB4IDA7ICBcclxuICB9ICBcclxuICAubWFye1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICAudmVydGljYWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG4uaG9yaXpvbmFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMSU7ICAgXHJcbn1cclxuXHJcbi5oZWFke1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI2Q5ZDlmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWQxe1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcblxyXG59XHJcbi53aWR0aHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 59358:
/*!********************************************************************!*\
  !*** ./src/app/admin/vendor-info/vendor-info.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"4\" class=\"content1\">\n        \n          <ion-label class=\"menu\"  (click)=\"moveToHome()\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToTopLevel()\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToPurchase()\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" style=\"color: #d84fad;\" >Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToInVendor()\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"moveToAd()\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"content2\">\n      \n          <p style=\"text-align: justify;text-align-last:left;\">    Search for vendors by a single partial keyworrd. The keyword is applied only to the Vendor ID,</p>\n  <p style=\"text-align: left;\">Primary Address Company Name,and Primary Contact Name field. The results will appear below</p>\n  \n  <div class=\"login\" style=\"margin-top: 2px;width: 600px;margin-left:5%;margin-right:25%;\">\n  \n  <ion-row class=\"back\">\n   <p style=\"color: black;padding-left: 5px;\">Search for Window by Single Partial Keyword:</p>\n  </ion-row>\n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n      <ion-col class=\"back\" size=\"2\" style=\"padding: 1px;font-weight: bold;padding-top: 16px;\">\n        <ion-label style=\"color: black;\">\n          Keyword:\n        </ion-label>\n      </ion-col>\n      \n      <ion-col size=\"7\">\n        <ion-input class=\"input\" ></ion-input>\n      </ion-col>\n      <ion-col class=\"back\" size=\"3\" style=\"text-align-last: center;\">\n      <ion-button class=\"btnLogin\">search</ion-button>\n      </ion-col>\n    </ion-row>\n    <br><br>\n\n</div>\n\n<ion-row class=\"wholeclass width\" >\n  <ion-col class=\"head\" size=\"2\" >\n    <ion-label class=\"highlight\">\n      <u>Vendor id</u>\n    </ion-label>\n  </ion-col>\n  <ion-col class=\"head\" size=\"4\" >\n    <ion-label class=\"highlight\">\n      <u>Primary Company Name</u>\n    </ion-label>\n  </ion-col>\n  <ion-col class=\"head\" size=\"4\">\n    <ion-label class=\"highlight\">\n      <u>Primary Contact Name</u>\n    </ion-label>\n  </ion-col>\n  <ion-col class=\"head\" size=\"2\" >\n    <ion-label class=\"highlight\">\n     <u > Login Level</u>\n    </ion-label>\n  </ion-col>\n</ion-row>\n\n<!--<ion-row style=\"background: #fbfbfe;\" class=\"width\">\n  <ion-col size=\"2\" (click)=\"moveToLoginInfo()\">\n    <ion-label class=\"highlight1\">\n     <u>4000021310</u> \n    </ion-label>\n  </ion-col>\n  <ion-col size=\"4\" class=\"head1\">\n    <ion-label style=\"color: black;\">\n     STDIA S.A \n    </ion-label>\n  </ion-col>\n  <ion-col size=\"4\" class=\"head1\">\n    <ion-label style=\"color: black;\">\n     Peter Goide \n    </ion-label>\n  </ion-col>\n  <ion-col size=\"2\" class=\"head1\">\n    <ion-label style=\"color: black;\">\n     3\n    </ion-label>\n  </ion-col>\n</ion-row>\n\n<ion-row style=\"background: #f3f3ff;\" class=\"width\">\n  <ion-col size=\"2\" (click)=\"moveToLoginInfo()\">\n    <ion-label class=\"highlight1\">\n     <u>4000045200</u> \n    </ion-label>\n  </ion-col>\n  <ion-col size=\"4\" class=\"head1\">\n    <ion-label style=\"color:black;\">\n     DUPLICATE-DO NOT USE STDIA\n    </ion-label>\n  </ion-col>\n  <ion-col size=\"4\" class=\"head1\">\n    <ion-label style=\"color: black;\">\n     N/A \n    </ion-label>\n  </ion-col>\n  <ion-col size=\"2\" class=\"head1\">\n    <ion-label style=\"color: black;\">\n     4 \n    </ion-label>\n  </ion-col>\n</ion-row>-->\n<div *ngFor=\"let items of vendorUser\">\n<ion-row style=\"background: #fbfbfe;\" class=\"width\">\n  <ion-col size=\"2\" (click)=\"moveToLoginInfo(items)\">\n    <ion-label class=\"highlight1\">\n     <u>{{items.id}}</u> \n    </ion-label>\n  </ion-col>\n  <ion-col size=\"4\" class=\"head1\">\n    <ion-label style=\"color: black\">\n      {{items.companyname}}\n    </ion-label>\n  </ion-col>\n  <ion-col size=\"4\" class=\"head1\">\n    <ion-label style=\"color: black;\">\n {{items.contact_email}}\n    </ion-label>\n  </ion-col>\n  <ion-col size=\"2\" class=\"head1\">\n    <ion-label style=\"color:black;\">\n     4\n    </ion-label>\n  </ion-col>\n\n  </ion-row>\n  </div>\n  <ion-row class=\"head width\">\n    <ion-col size=\"3\">\n  \n      <ion-button class=\"btnLogin\" >\n        <ion-icon name=\"chevron-back\"></ion-icon>\n        <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n        Previous page</ion-button>\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;padding-top: 16px;\">\n  <ion-label>You are on page 1 of 1</ion-label>\n    </ion-col>\n    <ion-col size=\"3\">\n  \n      <ion-button class=\"btnLogin\" >Next page\n        <ion-icon name=\"chevron-forward\"></ion-icon>\n        <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-col>\n</ion-row>\n</ion-grid>\n\n</ion-content>\n\n\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_vendor-info_vendor-info_module_ts.js.map