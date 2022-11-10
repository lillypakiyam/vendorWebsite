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
/* harmony import */ var D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invitedvendors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitedvendors.page.html?ngResource */ 22415);
/* harmony import */ var _invitedvendors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invitedvendors.page.scss?ngResource */ 10441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/util.service */ 19915);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);









let InvitedvendorsPage = class InvitedvendorsPage {
  constructor(router, util, initUser, api) {
    this.router = router;
    this.util = util;
    this.initUser = initUser;
    this.api = api;
    this.start = 0;
    this.limit = 10;
    this.page = 1;
    this.count = 10;
    this.maxPage = 0;
    this.lowercaseId = [];
    this.vendordate = [];
    this.vendorName = [];
    this.vendordetails = [];
    this.vends = [];
    this.vendsCount = [];
    this.firstName = [];
    this.vendorid = [];
    this.tempId = [];
    this.api.getAllvend().subscribe(user => {
      console.log(user);
      this.vends.push(user);
      this.api.vendorInvite = this.vends;
      this.vendorName = this.vends; // this.vendorName.push(user)

      this.vendordetails.push(this.vends); // console.log(user.temporaryId)

      this.api.vendorInvite = this.api.vendorInvite.slice(0, this.limit);
      let num = this.vendorName.length % 10 == 0 ? 0 : 1;
      this.maxPage = Math.trunc(this.vendorName.length / 10) + num; // this.vends=this.vends.splice(0,this.count)
      // console.log(this.limit,this.vendorInvite)
      // let count = Math.round(user.length/10)
      // console.log(count)
      // this.vendordetails =this.vendordetails.splice(0,this.limit)
      // console.log(this.vends)

      this.vendordetails.forEach(res => {
        res.map(data => {
          this.vendorid.push(data.companyname);
          this.tempId.push(data.temporaryId);
          this.firstName.push(data.first_name); // console.log(data.companyname.toLowerCase().indexOf(eve.srcElement.value.toLowerCase())>-1)
          // console.log(this.tempId)
        });
      });
    });
    this.loggedinUser = this.initUser.getUserData();
    console.log(this.loggedinUser); // this.pages=this.page +1 ;

    this.vendorCount(); // this.api.getAllvend().subscribe(res=>{
    //   console.log(res)
    // })
  }

  ngOnInit() {} // moveToAd(){
  //   this.router.navigate(['/administrator-accounts'])
  // }


  vendorCount() {
    var _this = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.vends);

      if (_this.vends.length !== 0) {
        const chunkSize = 10;

        while (_this.vends.length > 0) {
          const chunk = _this.vends.splice(0, chunkSize);

          _this.vends.push(chunk);
        }

        console.log(_this.vends);
      }
    })();
  }

  moveToInVendor() {
    this.router.navigate(['/invitedvendors']);
  }

  moveToHome() {
    this.router.navigate(['/home']);
  }

  inviteAnother() {
    var _this2 = this;

    return (0,D_website_vendor_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.loggedinUser.manageAdmin === 'Y') {
        _this2.util.goForward('admin/addvendor');
      } else {
        const toast = yield _this2.api.createToast('you are not allowed', false, 'middle');
        yield toast.present();
      } // this.router.navigate(['admin/addvendor'])

    })();
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
    this.api.vendorInvite = [];
    console.log(date, tdate); // if(date !== undefined && tdate !== undefined){

    this.api.getSearchDate(date, tdate).subscribe(user => {
      console.log(user, 'use');
      this.vendordate.push(user);
      this.api.vendorInvite = this.vendordate;
      console.log(this.api.vendorInvite, this.vendordate.length);
    }); // }else{
    // this.api.getallVendor().subscribe(user =>{
    //   console.log(user)
    //   this.vendorInvite=user
    //   console.log(this.vendorInvite, this.vendorInvite.length)
    //  })
    // }
  }

  searchElement(eve) {
    console.log(this.firstName);
    console.log(eve.target.value.length);
    console.log(this.vendorid);
    this.vendornames = eve.target.value;
    this.vendorComp = eve.target.value.toUpperCase();
    let result = [...this.vendorid];
    const query = eve.target.value.toLowerCase();
    result = this.vendorid.filter(d => d.toLowerCase().indexOf(query) > -1);
    console.log(result);
    this.lowercaseId = [];
    console.log(this.tempId);
    this.tempId.forEach(id => {
      console.log(id.toLowerCase());
      this.lowercaseId.push(id.toLowerCase());
    });
    console.log(this.lowercaseId);
    let tempid = [...this.lowercaseId]; // const ids = eve.target.value.toLowerCase();

    tempid = this.lowercaseId.filter(value => value.toLowerCase().indexOf(query) > -1);
    console.log(tempid);
    this.tempIds = tempid; //   if(eve.target.value.length !== 0){
    //     this.lowercaseId=[]
    //     console.log(this.tempid)
    //      this.tempid.forEach(id =>{
    //        this.lowercaseId.push(id.toLowerCase())
    //      })
    //   console.log(this.lowercaseId)
    //   let tempid:any =[...this.lowercaseId]
    //   tempid = this.lowercaseId.filter(value =>
    //     value.toLowerCase().indexOf(query) > -1
    //   )
    //   console.log(tempid);
    //   this.tempIds = tempid;
    //  console.log(this.tempIds)
    //  }

    if (eve.target.value.length === 0) {
      this.api.vendorInvite = [];
      this.vendorInvite = [];
      this.api.getAllvend().subscribe(user => {
        console.log(user);
        this.vendorInvite.push(user);
        this.api.vendorInvite = this.vendorInvite;
        this.api.vendorInvite = this.api.vendorInvite.slice(0, this.limit);
        let num = this.vendorName.length % 10 == 0 ? 0 : 1;
        this.maxPage = Math.trunc(this.vendorName.length / 10) + num;
      });
    }
  }

  search() {
    console.log(this.tempIds); // this.vendorInvite.filter(res =>{
    //   this.tempIds.filter(id =>{
    //     const idss= res.temporaryId.toLowerCase()
    //     console.log(res.temporaryId , id, res.temporaryId === id, idss)
    //     if(idss === id){
    //       console.log(res)
    //       this.vendorInvite.push(res)
    //     }
    //   })
    // })

    this.tempidSrc(this.vendorComp);
    this.companyname(this.vendornames);
    this.vendorNa(this.vendornames);
  }

  tempidSrc(tempid) {
    this.api.vendorInvite = [];
    this.api.getSearchTemp(tempid).subscribe(tem => {
      console.log(tem);
      this.api.vendorInvite.push(tem);
    });
  }

  companyname(Cname) {
    this.api.vendorInvite = [];
    this.api.getSearchcompname(Cname).subscribe(use => {
      // console.log(use)
      this.api.vendorInvite.push(use);
    });
  }

  vendorNa(Fname) {
    this.api.vendorInvite = [];
    this.api.getSearchfirstName(Fname).subscribe(use => {
      // console.log(use)
      this.api.vendorInvite.push(use);
    });
  }

  vendorinfo(data) {
    console.log(data);
    this.api.tempVendor = data;
    this.router.navigate(['admin/deletedvendor']);
  }

  DownloadSes(data) {
    window.open(data.invoiceUpload);
  }

  loadMore() {
    if (this.limit >= this.vendorName.length) {
      console.log(true);
      return;
    }

    this.start += 10;
    this.limit += 10;
    this.pages = this.page += 1;
    console.log(this.start, this.page);
    this.api.vendorInvite = this.vendorName.slice(this.start, this.limit);

    if (this.limit >= this.vendorName.length) {// this.butval=true;
    }
  }

  prev() {
    if (this.start === 0) {
      console.log(true);
      return;
    }

    this.start -= 10;
    this.limit -= 10;
    this.page -= 1;
    this.api.vendorInvite = this.vendorName.slice(this.start, this.limit); // if(this.start===0){
    //   // this.butval=false
    //   console.log(true)
    // }
    // console.log(start,this.limit)
  }

};

InvitedvendorsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_service_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_5__.InituserService
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}];

InvitedvendorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-invitedvendors',
  template: _invitedvendors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_invitedvendors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InvitedvendorsPage);


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

module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid>\n      <ion-row class=\"row1\">\n        <ion-col size=\"1\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"inviteNav('home')\" >Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('toplevel')\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('purchase')\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('vendorinform')\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('invitedvendors')\" style=\"color: #d84fad;\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('invited')\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"11\" class=\"content2\">\n      <h6 style=\"text-align: center;\">Here is the list of invited vendors.</h6>\n          <ion-card style=\"width:700px;margin-left:20%;margin-right:20%;\">\n            <ion-row class=\"back\">\n              \n              <ion-col>\n            \n              </ion-col>\n              <ion-col>\n                <ion-button class=\"btnLogin\" (click)=\"inviteAnother()\">\n                 Invite another</ion-button>\n                 \n                <ion-button class=\"btnLogin\" >Download as CSV\n             \n              </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\" background: #d9d9ff;text-align: left;padding-left: 10px;margin-top: 2px;\">\n             <p style=\"color: black;font-weight: bold;text-align: left;\">Search for vendors by Date:</p>\n            </ion-row>\n            <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n              <ion-col class=\"back\" size=\"2\">\n                <ion-label style=\"text-align: right;color: black;\">\n                  From Date:\n                </ion-label>\n              </ion-col>\n\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-input\n                    value=\"{{ date | date: 'dd.MM.yyyy' }}\"\n                    id=\"date\"\n                    class=\"ion-text-end\" placeholder=\"Date\" clearInput></ion-input>\n                  <ion-popover trigger=\"date\" style=\"width: 5000px;\">\n                    <ng-template>\n                      <ion-datetime presentation=\"date\" [(ngModel)]=\"date\" locale=\"sl-SI\"></ion-datetime>\n                    </ng-template>\n                  </ion-popover>\n                </ion-item>\n              </ion-col>\n\n              <ion-col class=\"back\" size=\"2\">\n                <ion-label style=\"text-align: right;color: black;\">\n                To Date:\n                </ion-label>\n              </ion-col>\n\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-input\n                    value=\"{{ dates | date: 'dd.MM.yyyy' }}\"\n                    id=\"dates\"\n                    class=\"ion-text-end\" placeholder=\"Date\" clearInput></ion-input>\n                  <ion-popover trigger=\"dates\" style=\"width: 5000px;\">\n                    <ng-template>\n                      <ion-datetime\n                        presentation=\"date\"\n                        [(ngModel)]=\"dates\"\n                        locale=\"sl-SI\">\n                      </ion-datetime>\n                    </ng-template>\n                  </ion-popover>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"2\" class=\"back\">\n                <ion-button class=\"btnLogin\" (click)=\"searchbyDate(date, dates)\">Search</ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\" background: #d9d9ff;text-align: left;padding-left: 10px;margin-top: 2px;\">\n           <ion-col size=\"5\">   <p style=\"color: black;font-weight: bold;\">Search for vendors by Name or ID:</p>\n           </ion-col>\n\n            </ion-row>\n            <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n              <ion-col class=\"back\" size=\"4\">\n                <ion-label style=\"color: black;text-align: left;\">\n                Full or partial Vendor Name or ID:\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n               <ion-input class=\"input\" [debounce]=\"1000\" inputmode=\"search\" (ionChange)=\"searchElement($event)\"></ion-input>\n              </ion-col>\n              <ion-col size=\"2\" class=\"back\">\n                <ion-button class=\"btnLogin\" (click)=\"search()\">Search</ion-button>\n              </ion-col>\n            </ion-row>\n           \n          </ion-card>\n          \n\n<div class=\"login\" style=\"\">\n\n  <ion-row class=\"wholeclass\">\n       <ion-col class=\"back\" size=\"1\" style=\"text-align-last:start ;\">\n      <ion-label class=\"highlight\">\n   Temp.ID\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"1\">\n   <ion-label class=\"highlight\">Company</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"2\">\n  <ion-label class=\"highlight\">Company Email</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"2\">\n<ion-label class=\"highlight\">\n  Requested Email\n</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"1\">\n      <ion-label>Invoice Exists?</ion-label>\n    </ion-col>\n    <ion-col class=\"head\">\n      <ion-label class=\"highlight\">\n      Invited\n      </ion-label>\n      </ion-col>\n      <ion-col class=\"head\">\n        <ion-label class=\"highlight\">\n    Last Login\n        </ion-label>\n        </ion-col>\n        <ion-col class=\"head\">\n          <ion-label class=\"highlight\">\n     Login Level\n          </ion-label>\n          </ion-col>\n          <ion-col class=\"head\" size=\"2\">\n            <ion-label class=\"highlight\">\n            Invited By\n            </ion-label>\n    </ion-col>\n  </ion-row>\n  \n  \n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\" *ngFor=\"let vendor of api.vendorInvite\">\n    <!-- <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\" *ngFor=\"let vendor of vendors\"> -->\n    <ion-col class=\"head1\" size=\"1\" style=\"text-align-last:start ;\">\n   <ion-label class=\"highlight\" (click)=\"vendorinfo(vendor)\">\n   {{vendor.temporaryId}}\n   </ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"1\">\n   <ion-label class=\"\">{{vendor.companyname}}</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"2\">\n<ion-label class=\"highlight\">{{vendor.companyEmail}}</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"2\">\n<ion-label class=\"highlight\">\n{{vendor.requestEmail}}</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"1\">\n   <!-- <ion-label>{{vendor.invoiceUpload !== null ? vendor.invoiceUpload : '-'}} </ion-label> -->\n   <ion-img src=\"assets/pdf.png\" style=\"width: 25px;height: 25px;\" \n    *ngIf=\"vendor.invoiceUpload !== null\"\n     (click)=\"DownloadSes(vendor)\"></ion-img>\n </ion-col>\n <ion-col class=\"head1\">\n   <ion-label>\n  {{vendor.invite_Date}}\n   </ion-label>\n   </ion-col>\n   <ion-col class=\"head1\">\n     <ion-label>\n {{vendor.login_date !== null ?vendor.login_date : '0000-00-00' }}\n     </ion-label>\n     </ion-col>\n     <ion-col class=\"head1\">\n       <ion-label class=\"highlight\">\n  <!-- {{vendor.login_date}} -->\n  {{vendor.login_level !== null ? vendor.login_level : '0'}}\n<!-- login level -->\n     </ion-label>\n       </ion-col>\n       <ion-col class=\"head1\" size=\"2\">\n         <ion-label class=\"highlight\">\n     {{vendor.invited_by}}\n         </ion-label>\n  </ion-col>\n    <!-- </ion-row> -->\n </ion-row>\n\n<!-- <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n  <ion-col class=\"back\" size=\"1\" style=\"text-align-last:start ;\">\n <ion-label class=\"highlight\">\nTEMP002868\n </ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"1\">\n<ion-label class=\"\">MY CARRIO</ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"2\">\n<ion-label class=\"highlight\">hironraja.p@gmail.com</ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"2\">\n<ion-label class=\"highlight\">\nba.bhavanee@gmail.com\n</ion-label>\n</ion-col>\n<ion-col class=\"head\" size=\"1\">\n <ion-label></ion-label>\n</ion-col>\n<ion-col class=\"head\">\n <ion-label class=\"\">\n 2022-09-02\n </ion-label>\n </ion-col>\n <ion-col class=\"head\">\n   <ion-label class=\"\">\n0000-00-00  00:00:00\n   </ion-label>\n   </ion-col>\n   <ion-col class=\"head\">\n     <ion-label class=\"highlight\">\n0\n     </ion-label>\n     </ion-col>\n     <ion-col class=\"head\" size=\"2\">\n       <ion-label class=\"highlight\">\n      bhavanee.ambati@ses.com\n       </ion-label>\n</ion-col>\n</ion-row> -->\n\n<!-- <ion-row class=\"back1\" style=\"margin-top: 2px;\">\n  <ion-col size=\"2\">\n\n    <ion-button class=\"btnLogin\" (click)=\"prev()\">\n          <ion-icon name=\"chevron-back\"></ion-icon>\n      <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n      Previous page</ion-button>\n  </ion-col>\n  <ion-col size=\"8\" style=\"text-align: center;vertical-align: sub;\">\n<ion-label style=\"vertical-align: sub;\">You are on page 1 of 1</ion-label>\n  </ion-col>\n  <ion-col size=\"2\">\n\n    <ion-button class=\"btnLogin\" (click)=\"loadMore()\">Next page\n      <ion-icon name=\"chevron-forward\"></ion-icon>\n      <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n    </ion-button>\n  </ion-col>\n</ion-row> -->\n\n<ion-row class=\"back1\" style=\"margin-top: 2px;\">\n\n  <ion-col size=\"2\">\n   \n    <ion-button class=\"btnLogin\" (click)=\"prev()\">\n          <ion-icon name=\"chevron-back\"></ion-icon>\n      <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n      Previous page</ion-button>\n  </ion-col>\n  <ion-col size=\"8\" style=\"text-align: center;vertical-align: sub;\">\n<ion-label style=\"vertical-align: sub;\">You are on {{page}} of {{maxPage}}</ion-label>\n  </ion-col>\n  <ion-col size=\"2\">\n\n    <ion-button class=\"btnLogin\" (click)=\"loadMore()\">Next page\n      <ion-icon name=\"chevron-forward\"></ion-icon>\n      <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n    </ion-button>\n  </ion-col>\n\n</ion-row>\n\n </div>\n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_invitedvendors_invitedvendors_module_ts.js.map