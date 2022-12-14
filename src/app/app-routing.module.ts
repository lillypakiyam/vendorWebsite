import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin/login',
    loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'admin/home',
    loadChildren: () => import('./admin/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'admin/signup',
    loadChildren: () => import('./admin/signup/signup.module').then(m => m.SignupPageModule)
  },

  {
    path: 'admin/administrator-accounts',
    loadChildren: () => import('./admin/administor-accounts/administor-accounts-routing.module').then(m => m.AdministorAccountsPageRoutingModule)
  },
  
  
  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'pages/login',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'pages/signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('./pages/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  },
  {
    path: 'vendor-profile',
    loadChildren: () => import('./pages/vendor-profile/vendor-profile.module').then( m => m.VendorProfilePageModule)
  },
  {
    path: 'vendor-contact-profile',
    loadChildren: () => import('./pages/vendor-contact-profile/vendor-contact-profile.module').then( m => m.VendorContactProfilePageModule)
  },
  {
    path: 'bank-details',
    loadChildren: () => import('./pages/bank-details/bank-details.module').then( m => m.BankDetailsPageModule)
  },
  {
    path: 'business-category',
    loadChildren: () => import('./pages/business-category/business-category.module').then( m => m.BusinessCategoryPageModule)
  },
  {
    path: 'tax-details',
    loadChildren: () => import('./pages/tax-details/tax-details.module').then( m => m.TaxDetailsPageModule)
  },
  {
    path: 'forget-psw',
    loadChildren: () => import('./pages/forget-psw/forget-psw.module').then( m => m.ForgetPswPageModule)
  },
  {
    path: 'forget-vendor-id',
    loadChildren: () => import('./pages/forget-vendor-id/forget-vendor-id.module').then( m => m.ForgetVendorIDPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'final-submission',
    loadChildren: () => import('./pages/final-submission/final-submission.module').then( m => m.FinalSubmissionPageModule)
  },
  {
    path: 'tax-record',
    loadChildren: () => import('./pages/tax-record/tax-record.module').then( m => m.TaxRecordPageModule)
  },
  {
    path: 'tax-form',
    loadChildren: () => import('./pages/tax-form/tax-form.module').then( m => m.TaxFormPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'administor-accounts',
    loadChildren: () => import('./admin/administor-accounts/administor-accounts.module').then( m => m.AdministorAccountsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./admin/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'invitedvendors',
    loadChildren: () => import('./admin/invitedvendors/invitedvendors.module').then( m => m.InvitedvendorsPageModule)
  },
  {
    path: 'addvendor',
    loadChildren: () => import('./admin/addvendor/addvendor.module').then( m => m.AddvendorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
