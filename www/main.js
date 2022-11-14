(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 64689:
/*!***********************************************************************!*\
  !*** ./src/app/admin/administor-accounts/administor-accounts.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministorAccountsPage": () => (/* binding */ AdministorAccountsPage)
/* harmony export */ });
/* harmony import */ var D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _administor_accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administor-accounts.page.html?ngResource */ 93614);
/* harmony import */ var _administor_accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administor-accounts.page.scss?ngResource */ 11250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/firestore.service */ 61456);
/* harmony import */ var src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/inituser.service */ 82819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);











let AdministorAccountsPage = class AdministorAccountsPage {
  constructor(router, fireAuth, firestore, initUser, api) {
    this.router = router;
    this.fireAuth = fireAuth;
    this.firestore = firestore;
    this.initUser = initUser;
    this.api = api;
    this.adminUser = [];
    this.addNewaccount = false;
    this.nameNot = false;
    this.emailNot = false;
    this.vendoruser = {
      name: '',
      email: '',
      password: '',
      viewersOnly: '',
      manageAdmin: ''
    };
    this.addNewaccount = true;
    const currentDate = new Date();
    this.TodayDate = moment__WEBPACK_IMPORTED_MODULE_7__(currentDate).format('YYYY-MM-DD');
    console.log(this.TodayDate);
    this.loggedinUser = this.initUser.getUserData();
    console.log(this.loggedinUser.email);
  }

  ngOnInit() {
    this.getadmindetails();
  }

  getadmindetails() {
    // console.log(this.api.adminId)
    this.adminUser = [];
    this.api.getallAdmin().subscribe(res => {
      res.map(user => {
        console.log('user name', user.name);
        this.adminUser.push(user); // this.adminName= user.name
        // this.adminEmail= user.email
      });
      console.log('res', res, res.name); // this.adminUser.push(res)
    });
  }

  moveTo() {
    this.router.navigate(['admin/home']);
    console.log('home');
  }

  loginName(eve) {
    // console.log(eve.target.value +'@123')
    this.vendoruser.password = eve.target.value + '@123';
    this.vendoruser.name = eve.target.value;
    console.log(this.vendoruser.name);
    console.log(this.vendoruser.password);
  }

  emailsubmit(event) {
    // console.log(event.target.value)
    this.vendoruser.email = event.target.value;
    console.log(this.vendoruser.email);
  }

  selectViews(eve) {
    if (eve.detail.checked === true) {
      this.vendoruser.viewersOnly = eve.detail.value;
    } else {
      this.vendoruser.viewersOnly = 'No';
    }

    console.log(this.vendoruser.viewersOnly);
  }

  selectManage(eve) {
    if (eve.detail.checked === true) {
      this.vendoruser.manageAdmin = eve.detail.value;
    } else {
      this.vendoruser.viewersOnly = 'No';
    }

    console.log(this.vendoruser.manageAdmin);
  }

  moveTolog() {
    this.router.navigate(['admin/login']);
  }

  sendVendorEmail() {
    // const email = new email.send()
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lilypackiyam@gmail.com",
      Password: "0527721E803854F2C924B66A3BAEAE2A03B2",
      // To : document.getElementById('requestEmail').value,
      To: this.vendoruser.email,
      From: 'lilypackiyam@gmail.com',
      Subject: "This is the subject",
      Body: `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/admin/login'
                 userName : ${this.vendoruser.email},
                 password : ${this.vendoruser.password}
                 
                 `
    }).then(message => {
      // alert('message sent')
      console.log(message);
    });
  }

  submit() {
    var _this = this;

    this.loggedinUser = this.initUser.getUserData();
    console.log(this.loggedinUser);
    console.log('username', this.vendoruser.email, this.vendoruser.name);
    const adminInfo = {
      'id': null,
      'name': this.vendoruser.name,
      'email': this.vendoruser.email,
      'viewersOnly': this.vendoruser.viewersOnly,
      'manageAdmin': this.vendoruser.manageAdmin,
      'password': this.vendoruser.password,
      'invite_Date': this.TodayDate,
      'login_date': null,
      'invited_by': this.loggedinUser.email,
      'login_level': null
    }; // return new Observable((observer) => {

    this.fireAuth.createAccount(this.vendoruser.email, this.vendoruser.password).then(user => {
      console.log('user', user);
      console.log('user', user.uid);
      adminInfo.id = user.uid; //  this.initUser.setToken(user.uid)

      this.firestore.createWithId('admin', adminInfo).then( /*#__PURE__*/function () {
        var _ref = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (usr) {
          console.log(usr);
          console.log(adminInfo);

          _this.sendVendorEmail();

          const toast = yield _this.api.createToasts('the vendor added & email sent successfully', false, 'top');
          yield toast.present();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => {
        console.log(err);
      }); // this.api.getUser().subscribe(res=>{
      //   console.log('user name', res)
      //   console.log('res',res, res.name)
      //   // this.initUser.setLoggedInAdmin(res)
      // })

      this.NewPassword();
    }, /*#__PURE__*/function () {
      var _ref2 = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        if (_this.vendoruser.name.length === 0 && _this.vendoruser.email.length === 0) {
          _this.NewPassword();
        } else {
          const toast = yield _this.api.createToast('the email id is already use in by another account', false, 'top');
          yield toast.present();

          if (_this.vendoruser.name.length === 0 || _this.vendoruser.email.length === 0) {
            _this.NewPassword();
          }
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()); // })
    // this.api.signUpAdd(this.vendoruser).subscribe(user=>{
    //   console.log('user',user)
    //   // this.api.adminId = user['id']
    //   console.log('user',user['id'])
    // })
  }

  NewPassword() {
    if (this.vendoruser.name.length === 0) {
      this.nameNot = true;
    } else {
      this.nameNot = false;
    }

    if (this.vendoruser.email.length === 0) {
      this.emailNot = true;
    } else {
      this.emailNot = false;
    }
  }

  moveToAdd() {
    this.addNewaccount = false;
  }

  close() {
    this.addNewaccount = true;
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

    if ('vendorinfo' === data) {
      this.router.navigate(['admin/vendor-info']);
    }

    if ('invitedvendors' === data) {
      this.router.navigate(['admin/invitedvendors']);
    } // if('invited' === data){
    //   this.router.navigate(['admin/adminitor-accounts'])
    // }

  }

};

AdministorAccountsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthenticationService
}, {
  type: src_app_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService
}, {
  type: src_app_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__.InituserService
}, {
  type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}];

AdministorAccountsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-administor-accounts',
  template: _administor_accounts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_administor_accounts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdministorAccountsPage);


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



// import { AddvendorPageRoutingModule } from './admin/addvendor/addvendor-routing.module';
// import { AddvendorPageModule } from './admin/addvendor/addvendor.module';
// import { AddvendorPage } from './admin/addvendor/addvendor.page';
const routes = [
    {
        path: 'admin/login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/login/login.module */ 65961)).then(m => m.LoginPageModule)
    },
    {
        path: 'admin/home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/home/home.module */ 81659)).then(m => m.HomePageModule)
    },
    {
        path: 'admin/signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/signup/signup.module */ 13076)).then(m => m.SignupPageModule)
    },
    {
        path: 'admin/administrator-accounts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_administor-accounts_administor-accounts-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/administor-accounts/administor-accounts-routing.module */ 15971)).then(m => m.AdministorAccountsPageRoutingModule)
    },
    // {
    //   path: 'admin/addvendor',
    //   loadChildren: () => import('./admin/addvendor/addvendor-routing.module').then(m => m.AddvendorPageRoutingModule)
    // },
    {
        path: 'admin/addvendor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_addvendor_addvendor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/addvendor/addvendor.module */ 11027)).then(m => m.AddvendorPageModule)
    },
    {
        path: 'pages/login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'pages/login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 17110)).then(m => m.SignupPageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'pages/signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 17110)).then(m => m.SignupPageModule)
    },
    {
        path: 'pages/password-change',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_password-change_password-change_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/password-change/password-change.module */ 75708)).then(m => m.PasswordChangePageModule)
    },
    // {
    //   path: 'password-change',
    //   loadChildren: () => import('./pages/password-change/password-change.module').then( m => m.PasswordChangePageModule)
    // },
    {
        path: 'pages/vendor-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vendor-profile_vendor-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/vendor-profile/vendor-profile.module */ 39030)).then(m => m.VendorProfilePageModule)
    },
    {
        path: 'pages/vendor-contact-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vendor-contact-profile_vendor-contact-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/vendor-contact-profile/vendor-contact-profile.module */ 16213)).then(m => m.VendorContactProfilePageModule)
    },
    {
        path: 'pages/bank-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_bank-details_bank-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/bank-details/bank-details.module */ 22351)).then(m => m.BankDetailsPageModule)
    },
    {
        path: 'pages/business-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_business-category_business-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/business-category/business-category.module */ 84531)).then(m => m.BusinessCategoryPageModule)
    },
    {
        path: 'pages/tax-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tax-details_tax-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tax-details/tax-details.module */ 46740)).then(m => m.TaxDetailsPageModule)
    },
    {
        path: 'pages/forget-psw',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_forget-psw_forget-psw_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forget-psw/forget-psw.module */ 55058)).then(m => m.ForgetPswPageModule)
    },
    {
        path: 'pages/forget-vendor-id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forget-vendor-id_forget-vendor-id_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forget-vendor-id/forget-vendor-id.module */ 73565)).then(m => m.ForgetVendorIDPageModule)
    },
    {
        path: 'pages/logout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_logout_logout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/logout/logout.module */ 91205)).then(m => m.LogoutPageModule)
    },
    {
        path: 'pages/final-submission',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_final-submission_final-submission_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/final-submission/final-submission.module */ 17485)).then(m => m.FinalSubmissionPageModule)
    },
    {
        path: 'pages/tax-record',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tax-record_tax-record_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tax-record/tax-record.module */ 2339)).then(m => m.TaxRecordPageModule)
    },
    {
        path: 'pages/tax-form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tax-form_tax-form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tax-form/tax-form.module */ 65634)).then(m => m.TaxFormPageModule)
    },
    {
        path: 'pages/terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms-conditions/terms-conditions.module */ 28671)).then(m => m.TermsConditionsPageModule)
    },
    // {
    //   path: 'login',
    //   loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
    // },
    // {
    //   path: 'home',
    //   loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
    // },
    {
        path: 'admin/administor-accounts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_administor-accounts_administor-accounts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/administor-accounts/administor-accounts.module */ 69405)).then(m => m.AdministorAccountsPageModule)
    },
    {
        path: 'admin/signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/signup/signup.module */ 13076)).then(m => m.SignupPageModule)
    },
    {
        path: 'admin/invitedvendors',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_invitedvendors_invitedvendors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/invitedvendors/invitedvendors.module */ 50167)).then(m => m.InvitedvendorsPageModule)
    },
    {
        path: 'admin/password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_password_password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/password/password.module */ 66062)).then(m => m.PasswordPageModule)
    },
    {
        path: 'admin/vendor-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_vendor-info_vendor-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/vendor-info/vendor-info.module */ 48067)).then(m => m.VendorInfoPageModule)
    },
    {
        path: 'admin/login-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_login-info_login-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/login-info/login-info.module */ 45310)).then(m => m.LoginInfoPageModule)
    },
    {
        path: 'admin/top-level',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_top-level_top-level_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/top-level/top-level.module */ 52066)).then(m => m.TopLevelPageModule)
    },
    {
        path: 'admin/purchase-order',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_purchase-order_purchase-order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/purchase-order/purchase-order.module */ 38827)).then(m => m.PurchaseOrderPageModule)
    },
    {
        path: 'admin/deleted',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_deleted_deleted_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/deleted/deleted.module */ 81008)).then(m => m.DeletedPageModule)
    },
    {
        path: 'admin/deletedvendor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_deletedvendor_deletedvendor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/deletedvendor/deletedvendor.module */ 35369)).then(m => m.DeletedvendorPageModule)
    },
    {
        path: 'pages/login-information',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-information_login-information_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-information/login-information.module */ 61731)).then(m => m.LoginInformationPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_inituser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/inituser.service */ 82819);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/util.service */ 19915);







let AppComponent = class AppComponent {
    constructor(initUser, util, navCont) {
        this.initUser = initUser;
        this.util = util;
        this.navCont = navCont;
        this.loggedinUser = this.initUser.getUserData();
        this.loggedinVendor = this.initUser.getVendorData();
        console.log(this.loggedinVendor, this.loggedinVendor.Category);
        if (this.loggedinVendor.id !== null) {
            if (this.loggedinVendor.approved === false) {
                if (this.loggedinVendor.Confirm_new_password === null) {
                    this.util.goToNew('pages/password-change');
                }
                if (this.loggedinVendor.Confirm_new_password !== null) {
                    // else{
                    this.util.goToNew('pages/vendor-profile');
                }
                if (this.loggedinVendor.country !== null && this.loggedinVendor.email !== null && this.loggedinVendor.street !== null &&
                    this.loggedinVendor.house !== null && this.loggedinVendor.city !== null && this.loggedinVendor.postal_code !== null &&
                    this.loggedinVendor.ph_no !== null) {
                    this.util.goToNew('pages/vendor-contact-profile');
                }
                if (this.loggedinVendor.first_name !== null && this.loggedinVendor.relationship_type !== null
                    && this.loggedinVendor.contact_email !== null
                    && this.loggedinVendor.ph_no !== null) {
                    this.util.goToNew('pages/bank-details');
                    // this.util.goToNew('pages/vendor-contact-profile')
                }
                if (this.loggedinVendor.country !== null && this.loggedinVendor.Account_no !== null
                    && this.loggedinVendor.bank_code !== null && this.loggedinVendor.currency !== null
                    && this.loggedinVendor.street !== null && this.loggedinVendor.document !== null
                    && this.loggedinVendor.city !== null
                    && this.loggedinVendor.swift_bic !== null
                    && this.loggedinVendor.bank_name !== null) {
                    // this.util.goToNew('pages/bank-details')
                    this.util.goToNew(['pages/business-category']);
                }
                if (this.loggedinVendor.Category !== null && this.loggedinVendor.Subcategory !== null) {
                    this.util.goToNew(['pages/tax-details']);
                }
                if ((this.loggedinVendor.Tax_number !== null && this.loggedinVendor.Tax_number_type !== null) || (this.loggedinVendor.reason !== null)) {
                    this.util.goToNew(['pages/tax-record']);
                }
                if (this.loggedinVendor.tax_Details.length !== 0) {
                    this.util.goToNew(['pages/tax-form']);
                }
                if (this.loggedinVendor.Taxform_upload !== null && this.loggedinVendor.SES_VSCform_upload !== null) {
                    this.util.goToNew(['pages/terms-conditions']);
                }
                if (this.loggedinVendor.first_agree === true && this.loggedinVendor.sec_agree === true) {
                    this.util.goToNew(['pages/terms-conditions']);
                }
                if (this.loggedinVendor.completed === true) {
                    this.util.goToNew(['pages/final-submission']);
                }
            }
            else {
                this.util.goToNew(['pages/login-information']);
            }
        }
        else {
            this.util.goToNew('pages/login');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_inituser_service__WEBPACK_IMPORTED_MODULE_2__.InituserService },
    { type: _service_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "InituserServiceFactory": () => (/* binding */ InituserServiceFactory),
/* harmony export */   "inituserservicevendorFactory": () => (/* binding */ inituserservicevendorFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/firebase-authentication.service */ 49137);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_admin_administor_accounts_administor_accounts_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/administor-accounts/administor-accounts.page */ 64689);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/api.service */ 39573);
/* harmony import */ var _service_inituser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/inituser.service */ 82819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 41059);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 23081);
















// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, src_app_admin_administor_accounts_administor_accounts_page__WEBPACK_IMPORTED_MODULE_4__.AdministorAccountsPage,],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__.IonicStorageModule.forRoot({ name: 'admindb' }),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.Config),
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_ELEMENTS_SCHEMA, _angular_core__WEBPACK_IMPORTED_MODULE_11__.NO_ERRORS_SCHEMA],
        // schemas: [ NO_ERRORS_SCHEMA ],
        providers: [src_app_service_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService, _service_inituser_service__WEBPACK_IMPORTED_MODULE_6__.InituserService, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__.FileTransfer, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File, _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__.FileOpener,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy, },
            _service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseAuthenticationService,
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.APP_INITIALIZER, useFactory: InituserServiceFactory, deps: [_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__.InituserService], multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.APP_INITIALIZER, useFactory: inituserservicevendorFactory, deps: [_service_inituser_service__WEBPACK_IMPORTED_MODULE_6__.InituserService], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);

function InituserServiceFactory(provider) {
    return () => provider.load();
}
function inituserservicevendorFactory(provider) {
    return () => provider.Vendorload();
}


/***/ }),

/***/ 39573:
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/firebase-authentication.service */ 49137);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firestore.service */ 61456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);










let ApiService = class ApiService {
  constructor(fireAuth, auth, toaster, http, firestore) {
    this.fireAuth = fireAuth;
    this.auth = auth;
    this.toaster = toaster;
    this.http = http;
    this.firestore = firestore;
    this.passwordChange = false;
    this.apiUrl = 'http://localhost:8100/login/';
    this.unSubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

  logout() {
    return this.fireAuth.logout();
  }

  updateToken(id) {
    this.id = id;
    console.log('id', this.id);
  }

  signUp(admin) {
    console.log(admin, admin['email'], admin['password']);
    const adminInfo = {
      'id': null,
      'name': `${admin['name']}`,
      'email': `${admin['email']}`,
      'username': `${admin['email']}`,
      'phoneno': `${admin['phone']}`,
      'password': `${admin['password']}`
    };
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      this.fireAuth.createAccount(admin['email'], admin['password']).then(user => {
        console.log(user);
        adminInfo.id = user.uid;
        this.firestore.createWithId('admin', adminInfo).then(usr => {
          console.log(admin, admin['email'], admin['password']);
          console.log(usr);
          observer.next(adminInfo);
        }, err => {
          observer.error(err);
        });
      }).catch(err => {
        observer.error(err);
      });
    });
  }

  signUpAdd(admin) {
    console.log(admin, admin['email'], admin['name']);
    const adminInfo = {
      'id': null,
      'name': `${admin['name']}`,
      'email': `${admin['email']}`,
      'viewersOnly': `${admin['viewersOnly']}`,
      'manageAdmin': `${admin['manageAdmin']}`,
      'temporary_password': `${admin['name']}`
    };
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      this.fireAuth.createAccount(admin['email'], admin['password']).then(user => {
        console.log(user);
        adminInfo.id = user.uid;
        this.firestore.createWithId('adminAdd', adminInfo).then(usr => {
          console.log(usr);
          observer.next(adminInfo);
        }, err => {
          observer.error(err);
        });
      }).catch(err => {
        observer.error(err);
      });
    });
  }

  getoneAdmin(adminId) {
    return this.addIdToObject(adminId, this.firestore.getOne('admin', adminId));
  }

  getoneAdminuser() {
    return this.addIdToObject(this.id, this.firestore.getOne('admin', this.id));
  }

  getoneVendoruser() {
    return this.addIdToObject(this.id, this.firestore.getOne('vendorAdd', this.id));
  }

  getSearchDate(date, dates) {
    // console.log(date)
    return this.firestore.getdate('vendorAdd', ref => ref.where('invite_Date', '>=', date).where('invite_Date', '<=', dates));
  }

  getallAdmin() {
    return this.firestore.findAlldr('admin');
  }

  getallvendorAdd() {
    return this.firestore.findAlldr('vendorAdd');
  }

  getallVendor() {
    return this.firestore.findAlldr('vendorAdd');
  } // sendEmail(data: any[]) {
  //   return this.http.post(this.apiUrl+'lilypackiyam@gmail.com', data);
  // }


  getUser() {
    console.log('id', this.id);
    return this.firestore.getFuncOne('admin', this.id);
  }

  getVendorUser() {
    console.log('id', this.id);
    return this.firestore.getFuncOne('vendorAdd', this.id);
  }

  getSchHistory(email) {
    return this.firestore.getDataOnce('admin', ref => ref.where('email', '==', email));
  }

  getvendorHistory(email) {
    return this.firestore.getDataOnce('vendorAdd', ref => ref.where('requestEmail', '==', email));
  }

  updatetax(id, data) {
    console.log('id', this.id);
    return this.firestore.update('vendorAdd', id, data);
  }

  createToast(message, showCloseButton = false, position = 'bottom', duration = 5000) {
    var _this = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toaster.create({
        message,
        position,
        duration,
        color: 'danger',
        buttons: [{
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      return toast;
    })();
  }

  createToasts(message, showCloseButton = false, position = 'bottom', duration = 5000) {
    var _this2 = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toaster.create({
        message,
        position,
        duration,
        color: 'success',
        buttons: [{
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      return toast;
    })();
  }

  logIn(username, password) {
    const admin = {
      id: '',
      email: username,
      password: password
    };
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      this.fireAuth.login(username, password).then(user => {
        observer.next({
          id: user.uid
        });
        this.firestore.createWithvendor('vendor', user.uid, admin).then(res => {
          console.log(res);
        });
      }).catch(err => {
        observer.error(err); //console.log(err);
      });
    });
  }

  addIdToObject(id, obj) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      obj.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscribe$)).subscribe(ref => {
        const newObj = ref;

        if (newObj) {
          newObj.id = id;
        }

        observer.next(newObj);
      }, err => {
        observer.error(err);
      });
    });
  }

};

ApiService.ctorParameters = () => [{
  type: src_app_service_firebase_authentication_service__WEBPACK_IMPORTED_MODULE_1__.FirebaseAuthenticationService
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: _firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService
}];

ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ }),

/***/ 49137:
/*!************************************************************!*\
  !*** ./src/app/service/firebase-authentication.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInfo": () => (/* binding */ AuthInfo),
/* harmony export */   "FirebaseAuthenticationService": () => (/* binding */ FirebaseAuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);





// import { resolve } from 'dns';
// import { rejects } from 'assert';
// import * as firebase from 'firebase/compat';
// @Injectable({
//   providedIn: 'root'
// })
class AuthInfo {
    constructor($uid) {
        this.$uid = $uid;
    }
    isLoggedIn() {
        return !!this.$uid;
    }
}
let FirebaseAuthenticationService = class FirebaseAuthenticationService {
    constructor(fireauth) {
        this.fireauth = fireauth;
        this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(FirebaseAuthenticationService.UNKNOWN_USER);
        this.fireauth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(user => {
            if (user) {
                this.authInfo$.next(new AuthInfo(user.uid));
            }
        });
    }
    createAccount(email, password) {
        return new Promise((resolved, rejected) => {
            this.fireauth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                if (res.user) {
                    console.log(res.user);
                    resolved(res.user);
                }
                else {
                    rejected(res);
                }
            })
                .catch(err => {
                rejected(err);
            });
        });
    }
    logout() {
        this.authInfo$.next(FirebaseAuthenticationService.UNKNOWN_USER);
        return this.fireauth.signOut();
    }
    login(email, password) {
        return new Promise((resolved, rejected) => {
            this.fireauth.signInWithEmailAndPassword(email, password)
                .then(res => {
                if (res.user) {
                    resolved(res.user);
                }
            })
                .catch(err => {
                rejected(err);
            });
        });
    }
    forgotPassoword(email) {
        this.fireauth.sendPasswordResetEmail(email).then((pass) => {
            // console.log('pass',pass)
            // alert(pass)
            alert("Password reset Link sent to your email, please your mail ");
        });
        // .catch(err => this.util.presentToast(`${err}`, true, 'bottom', 2100));
    }
    passEmail(code, password) {
        return new Promise((resolve, rejected) => {
            this.fireauth.confirmPasswordReset(code, password).then(res => {
                // console.log(res)
                resolve(res);
            }).catch(err => {
                rejected(err);
            });
        });
    }
    verificationCode(email) {
        var actionCodeSettings = {
            // After password reset, the user will be give the ability to go back
            // to this page.
            url: 'http://localhost:8100/pages/password-change',
            handleCodeInApp: true
        };
        this.fireauth.sendPasswordResetEmail(email, actionCodeSettings).then(res => {
            console.log(res);
        });
    }
};
FirebaseAuthenticationService.UNKNOWN_USER = new AuthInfo(null);
FirebaseAuthenticationService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth }
];
FirebaseAuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], FirebaseAuthenticationService);



/***/ }),

/***/ 39319:
/*!************************************************!*\
  !*** ./src/app/service/firestorage.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirestorageService": () => (/* binding */ FirestorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/storage */ 55574);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);





let FirestorageService = class FirestorageService {
    constructor(storage) {
        this.storage = storage;
        this.unSubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    uploadContent(file, fileName) {
        return new Promise((resolve, reject) => {
            try {
                if (file) {
                    return this.storage.upload(`uploads/${fileName}`, file).then(success => {
                        return this.storage.ref(`uploads/${fileName}`).getDownloadURL().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.unSubscriber$)).subscribe(url => {
                            resolve({ url, fileName });
                        });
                    }, failure => {
                        reject(failure);
                    })
                        .catch(err => {
                        reject(err);
                    });
                }
                else {
                    reject(new Error(' choice key not given'));
                }
            }
            catch (e) {
                reject(e);
            }
        });
    }
};
FirestorageService.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_2__.AngularFireStorage }
];
FirestorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FirestorageService);



/***/ }),

/***/ 61456:
/*!**********************************************!*\
  !*** ./src/app/service/firestore.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirestoreService": () => (/* binding */ FirestoreService)
/* harmony export */ });
/* harmony import */ var D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);







let FirestoreService = class FirestoreService {
  constructor(Angularfire) {
    this.Angularfire = Angularfire;
    this.unSubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

  createWithId(collection, data) {
    return this.Angularfire.doc(`${collection}/${data.id}`).set(this.addcreatedAt(data));
  }

  createWithvendor(collection, id, data) {
    return this.Angularfire.doc(`${collection}/${id}`).set(this.addcreatedAt(data));
  }

  update(collection, id, document) {
    return this.Angularfire.doc(`${collection}/${id}`).update(this.updateCreated(document));
  }

  delete(collection, id) {
    return this.Angularfire.doc(`${collection}/${id}`).delete();
  }

  findAlldr(collection) {
    return this.Angularfire.collection(collection).valueChanges({
      idField: 'id'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
  }

  create(collection, data) {
    var _this = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const doc = yield _this.Angularfire.collection(collection).add(_this.addcreatedAt(data));
      return doc.get();
    })();
  }

  getOne(collection, id) {
    return this.Angularfire.doc(`${collection}/${id}`).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
  }

  getFuncOne(collection, id) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      return this.Angularfire.collection(collection).doc(id).get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unSubscriber$)).subscribe(data => {
        observer.next(data.data());
      }, err => {
        observer.error(err);
      });
    });
  }

  getDataOnce(collection, querfn) {
    let query = this.Angularfire.collection(collection, querfn);
    return query.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(snapshot => {
      let items = [];
      snapshot.docs.map(a => {
        let data = a.data();
        const id = a.id;
        items.push({ ...data,
          id
        });
      });
      return items;
    }));
  }

  getdate(collections, qerfn) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      return this.Angularfire.collection(collections, qerfn).get().subscribe(value => {
        value.forEach(data => observer.next(data.data()));
      }, err => {
        observer.error(err);
      });
    });
  }

  addcreatedAt(data) {
    return { ...data,
      createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp()
    };
  }

  updateCreated(data) {
    return { ...data,
      updatedAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp()
    };
  }

};

FirestoreService.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore
}];

FirestoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], FirestoreService);


/***/ }),

/***/ 82819:
/*!*********************************************!*\
  !*** ./src/app/service/inituser.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InituserService": () => (/* binding */ InituserService)
/* harmony export */ });
/* harmony import */ var D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 39573);
/* harmony import */ var _firestorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firestorage.service */ 39319);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-uuid */ 23105);








let InituserService = class InituserService {
  constructor(storage, storageSer, api) {
    this.storage = storage;
    this.storageSer = storageSer;
    this.api = api;
    this.storage.create();
    this.createEmptyUser();
    this.createEmptyVendor();
  }

  getUserData() {
    return this.loggedInAdmin;
  }

  getVendorData() {
    return this.loggedInVendor;
  }

  load() {
    return new Promise((resolve, reject) => {
      this.getToken().then(token => {
        this.api.updateToken(token);

        if (token) {
          this.api.getoneAdminuser().subscribe(adminData => {
            if (adminData) {
              this.setLoggedInAdmin(adminData);
            }

            resolve(true);
          }, err => {
            resolve(true);
            console.log(err);
          });
        } else {
          resolve(true);
          console.log('ssd');
        }
      });
    });
  }

  Vendorload() {
    return new Promise((resolve, reject) => {
      this.getToken().then(token => {
        this.api.updateToken(token);

        if (token) {
          this.api.getoneVendoruser().subscribe(vendorData => {
            if (vendorData) {
              this.setLoggedInVendor(vendorData);
            }

            resolve(true);
          }, err => {
            resolve(true);
            console.log(err);
          });
        } else {
          resolve(true);
          console.log('ssd');
        }
      });
    });
  }

  createEmptyUser() {
    this.loggedInAdmin = {
      id: null,
      name: '',
      email: '',
      phone: '',
      viewersOnly: '',
      manageAdmin: '',
      temporary_password: '',
      token: ''
    };
  }

  createEmptyVendor() {
    this.loggedInVendor = {
      id: null,
      companyname: '',
      companyEmail: '',
      requestEmail: '',
      token: ''
    };
  }

  setToken(token) {
    var _this = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const date = moment__WEBPACK_IMPORTED_MODULE_1__().format('ll');
      console.log(token);

      _this.api.updateToken(token);

      yield _this.storage.set('token', token);
      yield _this.storage.set('aid', date); // await this.storage.create()
    })();
  } // async setItem(value): Promise<void>{
  //   this.api.updateID(value);
  //   console.log('value',value)
  //   await this.storage.({
  //      key: 'uid' ,
  //      value: JSON.stringify(value)
  //   });
  // }


  getToken() {
    var _this2 = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const date = moment__WEBPACK_IMPORTED_MODULE_1__().format('ll');
      const token = yield _this2.storage.get('token');
      const aid = yield _this2.storage.get('aid'); //console.log(aid);

      if (moment__WEBPACK_IMPORTED_MODULE_1__(date).isSame(aid)) {
        //console.log('same day');
        return token;
      } else {
        //console.log('diff day')
        _this2.storage.clear();
      }
    })();
  }

  setLoggedInAdmin(adminInfo) {
    var _this3 = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loggedInAdmin = adminInfo;
      console.log(_this3.loggedInAdmin);
      _this3.loggedInAdmin.token = yield _this3.getToken();
      yield _this3.storage.set('id', adminInfo.id);
      console.log('SetLoggedInAdmin', adminInfo.id);
    })();
  }

  setLoggedInVendor(vendorInfo) {
    var _this4 = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loggedInVendor = vendorInfo;
      console.log(_this4.loggedInVendor);
      _this4.loggedInVendor.token = yield _this4.getToken();
      yield _this4.storage.set('id', vendorInfo.id);
      console.log('SetLoggedInvendor', vendorInfo.id);
    })();
  }

  logout() {
    var _this5 = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.createEmptyUser();

      yield _this5.api.logout();

      _this5.storage.clear();
    })();
  }

  vendorLogout() {
    var _this6 = this;

    return (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.createEmptyUser();
      _this6.createEmptyVendor();

      yield _this6.api.logout();

      _this6.storage.clear();
    })();
  } // storage service


  fileuploads(url) {
    // this.camera.getPicture(options).then((url) => {
    const name = angular2_uuid__WEBPACK_IMPORTED_MODULE_4__.UUID.UUID(); // let name = url.split('/');

    console.log(name); // TODO

    this.makeFileIntoBlob(url, name).then(imageData => {
      // this.createLoader('Loading...');
      this.storageSer.uploadContent(imageData, name).then( /*#__PURE__*/function () {
        var _ref = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (success) {
          // await this.loadingCtrl.dismiss();
          // this.createToast('image uploded', true, 'bottom', 2100);
          console.log('success', success); // this.api.updateUser(this.loggedInUser.id, { profile_img: success.url }).pipe(takeUntil(this.unSubscriber$)).subscribe(res => {
          //   this.loggedInUser.profile_img = success.url;
          // });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch( /*#__PURE__*/function () {
        var _ref2 = (0,D_website_vend_log_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          // await this.loadingCtrl.dismiss();
          // this.createToast(`${err}`, true, 'bottom', 2100);
          console.log('err', err);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }); // }).catch(err => { console.log('err', err); });
  }

  makeFileIntoBlob(_imagePath, fileName) {
    return new Promise((resolve, reject) => {
      window['resolveLocalFileSystemURL'](_imagePath, fileEntry => {
        fileEntry['file'](resFile => {
          const reader = new FileReader();

          reader.onload = evt => {
            const imgBlob = new Blob([evt.target.result], {
              type: 'image/jpeg'
            });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };

          reader.onloadend = evt => {
            const imgBlob = new Blob([evt.target.result], {
              type: 'image/jpeg'
            });
            imgBlob.name = fileName;
            resolve(imgBlob);
          };

          reader.onerror = e => {
            reject(e);
          };

          reader.readAsArrayBuffer(resFile);
        }, err => {
          reject(err);
        });
      }, err => {});
    });
  }

};

InituserService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage
}, {
  type: _firestorage_service__WEBPACK_IMPORTED_MODULE_3__.FirestorageService
}, {
  type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
}];

InituserService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], InituserService);


/***/ }),

/***/ 19915:
/*!*****************************************!*\
  !*** ./src/app/service/util.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _inituser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inituser.service */ 82819);




let UtilService = class UtilService {
    constructor(navCtrl, inituser) {
        this.navCtrl = navCtrl;
        this.inituser = inituser;
    }
    goToNew(route) {
        this.navCtrl.navigateRoot(route);
    }
    goBack(route) {
        this.navCtrl.navigateBack(route);
    }
    goForward(route) {
        this.navCtrl.navigateForward(route);
    }
    Logout() {
        this.inituser.vendorLogout().then(logout => {
            console.log('id:null', logout);
            this.goToNew('pages/logout');
        });
        // this.router.navigate(['/logout'])
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController },
    { type: _inituser_service__WEBPACK_IMPORTED_MODULE_0__.InituserService }
];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UtilService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    Config: {
        apiKey: "AIzaSyBxvzevw61c18TZZnRwJXkuNYeNZxW3UTM",
        authDomain: "admin-vendor.firebaseapp.com",
        projectId: "admin-vendor",
        storageBucket: "admin-vendor.appspot.com",
        messagingSenderId: "297304045084",
        appId: "1:297304045084:web:21fd35025707897ff3d1d9",
        measurementId: "G-EC1CDHS00G"
    },
    COUNTRY_WITH_CURRENCIES: [
        {
            name: 'Andoran peseta',
            code: 'ADP'
        },
        {
            name: 'United Arab Emirates Dirham',
            code: 'AED'
        },
        {
            name: 'Afghani(Old)',
            code: 'AFA'
        },
        {
            name: 'Afghani',
            code: 'AFN'
        },
        {
            name: 'Albanian Lek',
            code: 'ALL'
        },
        {
            name: 'Armenian Dram',
            code: 'AMD'
        },
        {
            name: 'West Indian Guilder',
            code: 'ANG'
        },
        {
            name: 'Angolanische Kwanza',
            code: 'AOA'
        },
        {
            name: 'Angolan New Kwanza (Old)',
            code: 'AON'
        },
        {
            name: 'Angolan Kwanza Reajustado (Old)',
            code: 'AOR'
        },
        {
            name: 'Argentine Peso',
            code: 'ARS'
        },
        {
            name: 'Austrian Schilling',
            code: 'ATS'
        },
        {
            name: 'Australian Dollar',
            code: 'AUD'
        },
        {
            name: 'Aruban Guilder',
            code: 'AWG'
        },
        {
            name: 'Azerbaijan Manat',
            code: 'AZM'
        },
        {
            name: 'Azerbaijan Manat',
            code: 'AZN'
        },
        {
            name: 'Bosnia and Herzegovina Convertible Mark',
            code: 'BAM'
        },
        {
            name: 'Barbados Dollar',
            code: 'BBD'
        },
        {
            name: 'Bangladesh Taka',
            code: 'BDT'
        },
        {
            name: 'Belgian Franc',
            code: 'BEF'
        },
        {
            name: 'Bulgarian Lev',
            code: 'BGN'
        },
        {
            name: 'Bahrain Dinar',
            code: 'BHD'
        },
        {
            name: 'Burundi Franc',
            code: 'BIF'
        },
        {
            name: 'Bermudan Dollar',
            code: 'BMD'
        },
        {
            name: 'Brunei Dollar',
            code: 'BND'
        },
        {
            name: 'Boliviano',
            code: 'BOB'
        },
        {
            name: 'Brazilian Real',
            code: 'BRL'
        },
        {
            name: 'Bahaman Dollar',
            code: 'BSD'
        },
        {
            name: 'Bhutan Ngultrum',
            code: 'BTN'
        },
        {
            name: 'Botswana Pula',
            code: 'BWP'
        },
        {
            name: 'Belorussian Ruble (Old)',
            code: 'BYB'
        },
        {
            name: 'Belorussian Ruble',
            code: 'BYN'
        },
        {
            name: 'Belorussian Ruble',
            code: 'BYR'
        },
        {
            name: 'Belize Dollar',
            code: 'BZD'
        },
        {
            name: 'Canadian Dollar',
            code: 'CAD'
        },
        {
            name: 'Congolese Franc',
            code: 'CDF'
        },
        {
            name: 'French Franc (Pacific Islands)',
            code: 'CFP'
        },
        {
            name: 'Swiss Franc ',
            code: 'CHF'
        },
        {
            name: 'Chilean Peso',
            code: 'CLP'
        },
        {
            name: 'Chinesische yuan (International)',
            code: 'CNY'
        },
        {
            name: 'Colombian Peso',
            code: 'COP'
        },
        {
            name: 'Costa Rica Colon',
            code: 'CRC'
        },
        {
            name: 'Serbian Dinar',
            code: 'CSD'
        },
        {
            name: 'Cuban Peso',
            code: 'CUC'
        },
        {
            name: 'Cuban Peso',
            code: 'CUP'
        },
        {
            name: 'Cape Verde Escudo',
            code: 'CVE'
        },
        {
            name: 'Cyprus Pound',
            code: 'CYP'
        },
        {
            name: 'Czech Krona',
            code: 'CZK'
        },
        {
            name: 'German Mark',
            code: 'DEM'
        },
        {
            name: '(Internal) German Mark (3 dec.places)',
            code: 'DEM3'
        },
        {
            name: 'Djibouti Franc',
            code: 'DJF'
        },
        {
            name: 'Danish Krone',
            code: 'DKK'
        },
        {
            name: 'Dominican Peso',
            code: 'DOP'
        },
        {
            name: 'Algerian Dinar',
            code: 'DZD'
        },
        {
            name: 'Ecuadorian Sucre (> USD)',
            code: 'ECS'
        },
        {
            name: 'Estonian Krone',
            code: 'EEK'
        },
        {
            name: 'Egyptian Pound',
            code: 'EGP'
        },
        {
            name: 'Eritrean Nafka',
            code: 'ERN'
        },
        {
            name: 'Spanish Peseta',
            code: 'ESP'
        },
        {
            name: 'Ethiopian Birr',
            code: 'ETB'
        },
        {
            name: 'European Euro',
            code: 'EUR'
        },
        {
            name: 'Finnish markka',
            code: 'FIM'
        },
        {
            name: 'Fiji Dollar',
            code: 'FJD'
        },
        {
            name: 'Falkland Pound',
            code: 'FKP'
        },
        {
            name: 'French Franc',
            code: 'FRF'
        },
        {
            name: 'British Pound',
            code: 'GPB'
        },
        {
            name: 'Georgian Lari',
            code: 'GEL'
        },
        {
            name: 'Ghanian Cedi',
            code: 'GHC'
        },
        {
            name: 'Ghana Cedi',
            code: 'GHS'
        },
        {
            name: 'Gibraltar Pound',
            code: 'GIP'
        },
        {
            name: 'Gambian Dalasi',
            code: 'GMD'
        },
        {
            name: 'Guinean Franc',
            code: 'GNF'
        },
        {
            name: 'Greek Drachma',
            code: 'GRD'
        },
        {
            name: 'Guatmalan Quetzal',
            code: 'GTQ'
        },
        {
            name: 'Guinea Peso',
            code: 'GWP'
        },
        {
            name: 'Guyana Dollar',
            code: 'GYD'
        },
        {
            name: 'Hong Kong Dollar',
            code: 'HKD'
        },
        {
            name: 'Honduran Lempira',
            code: 'HNL'
        },
        {
            name: 'Croatian Kuna',
            code: 'HRK'
        },
        {
            name: 'Haitian Gourde',
            code: 'HTG'
        },
        {
            name: 'Hungarian Forint',
            code: 'HUF'
        },
        {
            name: 'Indonesian Rupiah',
            code: 'IDR'
        },
        {
            name: 'Irish Punt',
            code: 'IEP'
        },
        {
            name: 'Isreali Scheckel',
            code: 'ILS'
        },
        {
            name: 'Indian Rupee',
            code: 'INR'
        },
        {
            name: 'Iraqui Dinar',
            code: 'IQD'
        },
        {
            name: 'Iranian Rial',
            code: 'IRR'
        },
        {
            name: 'Iceland Krona',
            code: 'ISK'
        },
        {
            name: 'Italian Lira',
            code: 'ITL'
        },
        {
            name: 'Jamaican Dollar',
            code: 'JMD'
        },
        {
            name: 'Jordanian Dinar',
            code: 'JOD'
        },
        {
            name: 'Japanese yen',
            code: 'JPY'
        },
        {
            name: 'Kenyan Shilling',
            code: 'KES'
        },
        {
            name: 'Kyrgyzstan Som',
            code: 'KGS'
        },
        {
            name: 'Cambodian Riel',
            code: 'KHR'
        },
        {
            name: 'Comoros Franc',
            code: 'KMF'
        },
        {
            name: 'North Korean Won',
            code: 'KPW'
        },
        {
            name: 'South Korean Won',
            code: 'KRW'
        },
        {
            name: 'Kuwaiti Dinar',
            code: 'KWD'
        },
        {
            name: 'Cayman Dollar',
            code: 'KYD'
        },
        {
            name: 'Kazakstanian Tenge',
            code: 'KZT'
        },
        {
            name: 'Laotian Kip',
            code: 'LAK'
        },
        {
            name: 'Lebanese Pound',
            code: 'LBP'
        },
        {
            name: 'Sri Lankan Rupee',
            code: 'LKR'
        },
        {
            name: 'Liberian Dollar',
            code: 'LRD'
        },
        {
            name: 'Lesotho Loti',
            code: 'LSL'
        },
        {
            name: 'Lithuanian Lita',
            code: 'LTL'
        },
        {
            name: 'Luxembourg Franc',
            code: 'LUF'
        },
        {
            name: 'Latvian Lat',
            code: 'LVL'
        },
        {
            name: 'Libyan Dinar',
            code: 'LYD'
        },
        {
            name: 'Moroccan Dirham',
            code: 'MAD'
        },
        {
            name: 'Moldavian Leu',
            code: 'MDL'
        },
        {
            name: 'Madagascan Ariary (New)',
            code: 'MGA'
        },
        {
            name: 'Madagascan Franc (Old)',
            code: 'MGF'
        },
        {
            name: 'Macedonian Denar',
            code: 'MKD'
        },
        {
            name: 'Myanmar Kyat',
            code: 'MNK'
        },
        {
            name: 'Mongolian Tugrik',
            code: 'MNT'
        },
        {
            name: 'Macao Pataca',
            code: 'MOP'
        },
        {
            name: 'Mauritanian Ouguiya',
            code: 'MRO'
        },
        {
            name: 'Mauritanian Ouguiya',
            code: 'MRU'
        },
        {
            name: 'Maltese Lira',
            code: 'MTL'
        },
        {
            name: 'Mauritian Rupee',
            code: 'MUR'
        },
        {
            name: 'Maldive Rufiyaa',
            code: 'MVR'
        },
        {
            name: 'Malawi Kwacha',
            code: 'MYK'
        },
        {
            name: 'Mexican Tesos',
            code: 'MXN'
        },
        {
            name: 'Malaysian Ringgit',
            code: 'MYR'
        },
        {
            name: 'Mozambique Metical',
            code: 'MZM'
        },
        {
            name: 'Mozambique Metical',
            code: 'MZN'
        },
        {
            name: 'Namibian Dollar',
            code: 'NAD'
        },
        {
            name: 'Nigerian Naira',
            code: 'NGN'
        },
        {
            name: 'Nicaraguan Cordoba Oro',
            code: 'NIO'
        },
        {
            name: 'Dutch Guilder',
            code: 'NLG'
        },
        {
            name: 'Norwegian Krone',
            code: 'NOK'
        },
        {
            name: 'Nepalese Rupee',
            code: 'NPR'
        },
        {
            name: 'New Zealand Dollars',
            code: 'NZD'
        },
        {
            name: 'New Zealand Dollars',
            code: 'NZD5'
        },
        {
            name: 'Omani Rial',
            code: 'OMR'
        },
        {
            name: 'Panamanian Balboa',
            code: 'PAB'
        },
        {
            name: 'Peruvian New Sol',
            code: 'PEN'
        },
        {
            name: 'Papua New Guinea Kina',
            code: 'PGK'
        },
        {
            name: 'Philippine Peso',
            code: 'PHP'
        },
        {
            name: 'Pakistani Rupee',
            code: 'PKR'
        },
        {
            name: 'Polish Zloty (new)',
            code: 'PLN'
        },
        {
            name: 'Portuguese Escudo',
            code: 'PTE'
        },
        {
            name: 'Paraguayan Guarani',
            code: 'PYG'
        },
        {
            name: 'Qatar Rial',
            code: 'QAR'
        },
        {
            name: 'Chinesische Renminbi (national)',
            code: 'RMB'
        },
        {
            name: 'Romanian Leu',
            code: 'ROL'
        },
        {
            name: 'Romanian Leu (New)',
            code: 'RON'
        },
        {
            name: 'Serbian Dinar',
            code: 'RSD'
        },
        {
            name: 'Russian Ruble',
            code: 'RUB'
        },
        {
            name: 'Rwandan Franc',
            code: 'RWF'
        },
        {
            name: 'Saudi Riyal',
            code: 'SAR'
        },
        {
            name: 'Solomon Islands Dollar',
            code: 'SBD'
        },
        {
            name: 'Seychelles Rupee',
            code: 'SCR'
        },
        {
            name: 'Sudanese Dinar',
            code: 'SDD'
        },
        {
            name: 'Sudanese Pound',
            code: 'SDP'
        },
        {
            name: 'Swedish Krona',
            code: 'SEK'
        },
        {
            name: 'Singapore Dollar',
            code: 'SGD'
        },
        {
            name: 'St.Helena Pound',
            code: 'SHP'
        },
        {
            name: 'Slovenian Tolar',
            code: 'SIT'
        },
        {
            name: 'Slovakian Krona',
            code: 'SKK'
        },
        {
            name: 'Sierra Leone Leone',
            code: 'SLL'
        },
        {
            name: 'Somalian Shilling',
            code: 'SOS'
        },
        {
            name: 'Surinam Dollar',
            code: 'SRD'
        },
        {
            name: 'Surinam Guilder (Old)',
            code: 'SRG'
        },
        {
            name: 'South Sudanese Pound',
            code: 'SSP'
        },
        {
            name: 'Sao Tome/Principe Dobra',
            code: 'STD'
        },
        {
            name: 'El Salvador Colon',
            code: 'SVC'
        },
        {
            name: 'Syrian Pound',
            code: 'SWP'
        },
        {
            name: 'Swaziland Lilangeni',
            code: 'SZL'
        },
        {
            name: 'Thailand Baht',
            code: 'THB'
        },
        {
            name: 'Tajikistani Ruble (Old)',
            code: 'TJR'
        },
        {
            name: 'Tajikistani Somoni',
            code: 'TJS'
        },
        {
            name: 'Turkmenistani Manat',
            code: 'TMM'
        },
        {
            name: 'Tunisian Dinar',
            code: 'TND'
        },
        {
            name: 'Tongan Paanga',
            code: 'TOP'
        },
        {
            name: 'Timor Escudo',
            code: 'TPE'
        },
        {
            name: 'Turkish Lira (Old)',
            code: 'TRL'
        },
        {
            name: 'Turkish Lira',
            code: 'TRY'
        },
        {
            name: 'Trinidad and Tobago Dollar',
            code: 'TTD'
        },
        {
            name: 'New Thaiwan Dollar',
            code: 'TWD'
        },
        {
            name: 'Tanzanian Shilling',
            code: 'TZS'
        },
        {
            name: 'Ukraine Hryvnia',
            code: 'UAH'
        },
        {
            name: 'Ugandan Shilling',
            code: 'UGX'
        },
        {
            name: 'United States Dollar',
            code: 'USD'
        },
        {
            name: '(Internal) United States Dollar (5 Dec.)',
            code: 'USDN'
        },
        {
            name: 'Uruguayan Peso (new)',
            code: 'UYU'
        },
        {
            name: 'Uzbekistan Som',
            code: 'UZS'
        },
        {
            name: 'Venezuelan Bolivar',
            code: 'VEB'
        },
        {
            name: 'Venezuelan Bolivar Hard',
            code: 'VEF'
        },
        {
            name: 'Bolivar Soberano',
            code: 'VES'
        },
        {
            name: 'Vietnamese Dong',
            code: 'VND'
        },
        {
            name: 'Vanuatu Vatu',
            code: 'VUV'
        },
        {
            name: 'Samoan Tala',
            code: 'WST'
        },
        {
            name: 'Gabon CFA Franc BEAC',
            code: 'XAF'
        },
        {
            name: 'East Carribean Dollar',
            code: 'XCD'
        },
        {
            name: 'St.Christopher Dollar',
            code: 'XDS'
        },
        {
            name: 'European Currency Unit (E.C.U)',
            code: 'XEU'
        },
        {
            name: 'Benin CFA Franc BCEAO',
            code: 'XOF'
        },
        {
            name: 'CFP Franc',
            code: 'XPF'
        },
        {
            name: 'Yemeni Ryal',
            code: 'YER'
        },
        {
            name: 'New Yugoslavian Dinar (Old)',
            code: 'YUN'
        },
        {
            name: 'South African Rand',
            code: 'ZAR'
        },
        {
            name: 'Zambian Kwacha',
            code: 'ZMK'
        },
        {
            name: 'Zambian Kwacha',
            code: 'ZMW'
        },
        {
            name: 'Zaire (Old)',
            code: 'ZRN'
        },
        {
            name: 'Zimbabwean Dollar',
            code: 'ZWD'
        },
    ]
};
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBxvzevw61c18TZZnRwJXkuNYeNZxW3UTM",
//   authDomain: "admin-vendor.firebaseapp.com",
//   projectId: "admin-vendor",
//   storageBucket: "admin-vendor.appspot.com",
//   messagingSenderId: "297304045084",
//   appId: "1:297304045084:web:21fd35025707897ff3d1d9",
//   measurementId: "G-EC1CDHS00G"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 11250:
/*!************************************************************************************!*\
  !*** ./src/app/admin/administor-accounts/administor-accounts.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".head {\n  border-left: 2px solid white;\n  background: #d9d9ff;\n  text-align: center;\n}\n\n.head1 {\n  border-left: 2px solid white;\n  background: rgb(252, 250, 250);\n  text-align: center;\n}\n\n.highlight {\n  color: var(--ion-color-secondary);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0b3ItYWNjb3VudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJhZG1pbmlzdG9yLWFjY291bnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkMXtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTAsIDI1MCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhpZ2hsaWdodHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 93614:
/*!************************************************************************************!*\
  !*** ./src/app/admin/administor-accounts/administor-accounts.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\" class=\"header\">\n  <ion-img src=\"assets/logo.png\" class=\"img\"></ion-img>\n  </ion-header>\n\n\n  <ion-content>\n\n    <ion-grid style=\"margin-top: 30px;\">\n      <ion-row class=\"row1\">\n        <ion-col size=\"3\" class=\"content1\">\n        \n          <ion-label class=\"menu\" (click)=\"inviteNav('home')\">Home</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('toplevel')\">Top Level Reports</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('purchase')\">Purchase Order Details</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('vendorinfo')\">Vendor Information</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\" (click)=\"inviteNav('invitedvendors')\">Invited Vendors</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\"  style=\"color: #d84fad;\">Administrator Accounts</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Sent Emails Log</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Action Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">Reset Test Account</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">IT Support Logs</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\">GDPR</ion-label>\n          <br>\n          <br>\n          <ion-label class=\"menu\"  (click)=\"moveTolog()\">Logout</ion-label>\n        </ion-col>\n        <ion-col size=\"9\" class=\"content2\">\n      \n  \n\n<div class=\"login\" style=\"margin-top: 2px;\">\n\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\">\n       <ion-col class=\"head\" size=\"1\">\n      <ion-label style=\"text-align: right;\">\n        Login\n      </ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"3\">\n   <ion-label>E-mail</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"2\">\n  <ion-label>Last Login</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"2\">\n<ion-label>\n  Viewer Login\n</ion-label>\n    </ion-col>\n    <ion-col class=\"head\" size=\"3\">\n      <ion-label>Can Manage Admins? </ion-label>\n    </ion-col>\n    <ion-col class=\"head\">\n      <ion-label>\n        Delete\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  \n  <div *ngFor=\"let items of adminUser\">\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;\" >\n    <ion-col class=\"head1\" size=\"1\">\n   <ion-label style=\"text-align: right;\" class=\"highlight\">\n     <!-- {{adminUser[0].name}}\n     {{adminUser[1].name}}\n     {{adminUser[2].name}}\n     {{adminUser[3].name}} -->\n  {{items.name}}\n</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"3\">\n<ion-label class=\"highlight\">\n  <!-- {{adminEmail}} -->\n  {{items.email}}\n  <!-- {{adminUser[0].email}}\n  {{adminUser[1].email}}\n  {{adminUser[2].email}}\n  {{adminUser[3].email}} -->\n</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"2\">\n<ion-label>\n  2022-02-06     15:51:22\n</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"2\">\n<ion-label>\nN\n</ion-label>\n </ion-col>\n <ion-col class=\"head1\" size=\"3\">\n   <ion-label>Y</ion-label>\n </ion-col>\n <ion-col class=\"head1\">\n<ion-icon name=\"close-outline\" style=\"font-weight: bold;\"></ion-icon>\n </ion-col>\n</ion-row>\n</div>\n\n<ion-row class=\"back\">\n  <ion-col>\n\n  </ion-col>\n  <ion-col>\n\n  </ion-col>\n  <ion-col>\n    <ion-button class=\"btnLogin\" (click)=\"moveToAdd()\">Add New</ion-button>\n    <ion-button class=\"btnLogin\" >Change my password</ion-button>\n  </ion-col>\n</ion-row>\n\n\n<!-- <form onsubmit=\"sendEmail();reset();return;\" *ngIf=\"!addNewaccount\"> -->\n<ion-card style=\"margin-top:40px;width:500px;margin-left:25%;margin-right:25%;\" *ngIf=\"!addNewaccount\"> \n  <ion-row style=\" background: #d9d9ff;text-align: left;padding-left: 10px;\">\n   <h6 style=\"color: black;\"> Add Administrator:</h6>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;color: red;\">\n  Login:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n     <ion-input class=\"input\" (ionBlur)=\"loginName($event)\" id=\"login\"></ion-input>\n      <ion-label *ngIf=\"nameNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;color: red;\">\n  Email Address:\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n     <ion-input class=\"input\" (ionBlur)=\"emailsubmit($event)\" id=\"email\"></ion-input>\n      <ion-label *ngIf=\"emailNot\" style=\"color: red;\">*Please fill this field</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;color:black\">\nViewers Only?\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n <ion-checkbox value=\"yes\" (ionChange)=\"selectViews($event)\"></ion-checkbox>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"wholeclass\" style=\"margin-top: 2px;width: 500px;\">\n    <ion-col class=\"back\" size=\"4\">\n      <ion-label style=\"text-align: right;color: black;\">\nCan Manage Admins?\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n     <ion-checkbox value=\"yes\" (ionChange)=\"selectManage($event)\"></ion-checkbox>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"back\">\n    \n    <ion-col>\n  \n    </ion-col>\n    <ion-col>\n      <ion-button class=\"btnLogin\" (click)=\"close()\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n        <ion-icon name=\"chevron-back\" style=\"margin-left: -10px;\"></ion-icon>\n       Close</ion-button>\n      <ion-button class=\"btnLogin\" type=\"submit\" (click)=\"submit()\">Submit\n      <ion-icon name=\"chevron-forward\" ></ion-icon>\n      <ion-icon name=\"chevron-forward\" style=\"margin-left: -10px;\"></ion-icon>\n    </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n<!-- </form> -->\n\n<!-- <script>\n  function sendEmail(){\n    // alert('Your Message submitted successfully');\n    Email.send({\n      Host : \"smtp.elasticemail.com\",\n      Username : \"lilypackiyam@gmail.com\",\n      Password : \"0527721E803854F2C924B66A3BAEAE2A03B2\",\n      To : document.getElementById('#email').value,\n      // To : document.getElementById('email').value,\n      From : 'vendordeveloper22@gmail.com',\n      Subject : \"This is the subject\",\n      Body : \"And this is lilly\"\n    }).then(\n    message => alert(message)\n    // alert('Your Message submitted successfully');\n\n    );\n  }\n</script> -->\n </div>\n  </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  <ion-footer style=\"position: relative;\">\n    <div class=\"footer\"></div>\n    <ion-row>\n      <ion-col>\n  <ion-label style=\"margin-left: 5px;font-weight: bold;\">© 2017 SES S.A. All rights reserved.</ion-label>\n  </ion-col>\n  \n   \n    \n  <ion-col></ion-col>\n  <ion-label style=\"margin-top: 10px;\">Follow Us</ion-label>\n  <ion-col>\n    <ion-row>\n    <ion-img src=\"assets/twitter.png\" class=\"icon\"></ion-img>\n    \n    <ion-img src=\"assets/facebook.png\" class=\"icon\"></ion-img>\n    \n  \n    <ion-img src=\"assets/youtube.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/linkedin.png\" class=\"icon\"></ion-img>\n  \n    <ion-img src=\"assets/instagram.png\" class=\"icon\"></ion-img> \n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Privacy</ion-label>\n    <ion-label style=\"font-weight: bold;padding-left: 10px;\">| Terms and Conditions</ion-label>\n  </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-footer>";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map