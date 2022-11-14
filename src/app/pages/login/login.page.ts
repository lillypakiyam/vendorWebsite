import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { UtilService } from 'src/app/service/util.service';
import { Vendor } from '../models/vendor';
import { PasswordChangePage } from '../password-change/password-change.page';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 private loggedinVendor: any;
 TodayDate:string;
  vendorUser={
    email:'',
    password:''
  }
  constructor(private router: Router,
              private authent: FirebaseAuthenticationService,
              private firestore: FirestoreService,
              private initUser: InituserService,
              private util: UtilService,
              private api: ApiService) { 
                // this.api.getoneVendoruser().subscribe(user=>{
                //   console.log(user)
                // })
                const currentDate = new Date();
                this.TodayDate = moment(currentDate).format('YYYY-MM-DD')
           this.loggedinVendor = this.initUser.getVendorData()
           console.log(this.loggedinVendor)

              }

  ngOnInit() {
  }
  
  moveTo(){
    this.api.logIn(this.vendorUser.email+'@gmail.com', this.vendorUser.password).subscribe(res=>{
      console.log(res)
      console.log(res.id)
     this.initUser.setToken(res.id)
     const pass:any={
       temprory_password: this.vendorUser.password,
       login_date: this.TodayDate
     }
      this.firestore.update('vendorAdd',res.id, pass).then(res=>{
        console.log(res)
     })
     this.api.getVendorUser().subscribe(user=>{
      console.log('user name', user)
      console.log('res',user.id)
      // if(user.id === res.uid){
        this.initUser.setLoggedInVendor(user)
        this.loggedinVendor = this.initUser.getVendorData()
        console.log(this.loggedinVendor)
        // this.authent.forgotPassoword(this.vendorUser.email)
        // this.router.navigate(['pages/password-change']);

          // if (this.loggedinVendor.id !==null){
          // if(this.loggedinVendor.Confirm_new_password === null){
          //   this.util.goToNew('pages/password-change')
          // }

      if (this.loggedinVendor.approved === false){

    
          if(this.loggedinVendor.Confirm_new_password === null){
            this.util.goToNew('pages/password-change')
          }else{
            this.util.goToNew('pages/vendor-profile')
          }
    
          if(this.loggedinVendor.country !==null && this.loggedinVendor.email !==null && this.loggedinVendor.street !==null &&
            this.loggedinVendor.house !==null && this.loggedinVendor.city !==null && this.loggedinVendor.postal_code !==null &&
            this.loggedinVendor.ph_no !==null ){
            this.util.goToNew('pages/vendor-contact-profile')
          }
    
          if(this.loggedinVendor.first_name !==null && this.loggedinVendor.relationship_type !==null
            && this.loggedinVendor.contact_email !==null 
            && this.loggedinVendor.ph_no !==null){
            this.util.goToNew('pages/bank-details')
            // this.util.goToNew('pages/vendor-contact-profile')
          }
    
          if(this.loggedinVendor.country !==null && this.loggedinVendor.Account_no !==null
              && this.loggedinVendor.bank_code !==null && this.loggedinVendor.currency !==null
              && this.loggedinVendor.street !==null && this.loggedinVendor.document !==null
              && this.loggedinVendor.city !==null 
              && this.loggedinVendor.swift_bic !==null 
              && this.loggedinVendor.bank_name !==null){
            // this.util.goToNew('pages/bank-details')
                this.util.goToNew(['pages/business-category'])
          }    
    
          if(this.loggedinVendor.Category !==null && this.loggedinVendor.Subcategory !==null)
          {
            this.util.goToNew(['pages/tax-details'])
          }
          
          if((this.loggedinVendor.Tax_number !==null && this.loggedinVendor.Tax_number_type !==null) || (this.loggedinVendor.reason !==null))
           { 
            this.util.goToNew(['pages/tax-record']);
           }
    
          if(this.loggedinVendor.Category !==null && this.loggedinVendor.Subcategory !==null)
          {
            this.util.goToNew(['pages/tax-details'])
          }
        
          if(this.loggedinVendor.tax_Details.length !==0){
            this.util.goToNew(['pages/tax-form']);
           }
           
    
        if(this.loggedinVendor.Taxform_upload !==null && this.loggedinVendor.SES_VSCform_upload !==null){
          this.util.goToNew(['pages/terms-conditions'])
        }
    
        if(this.loggedinVendor.completed ===true )
        { 
          this.util.goToNew(['pages/final-submission']);
        }
      }else{
        this.util.goToNew(['pages/login-information']);
    
      }
        //   // if((this.loggedinVendor.taxnum !==null && this.loggedinVendor.taxnumtype !==null) || (this.loggedinVendor.reason !==null))
        //   //  { 
        //   //   this.util.goToNew(['pages/tax-record']);
        //   //   // console.log(this.loggedinVendor.tax_Details.length)
        //   //  }else{
        //   //   this.util.goToNew(['pages/tax-details'])
        //   //  }
    
        //   //  if(this.loggedinVendor.tax_Details.length !==0){
        //   //   this.util.goToNew(['pages/tax-form']);
        //   //  }else{
        //   //   this.util.goToNew(['pages/tax-record']);
        //   //  }
    
        // if(this.loggedinVendor.taxformupload !==null && this.loggedinVendor.sesvscformupload !==null){
        //   this.util.goToNew(['pages/terms-conditions'])
        // }else{
        //   this.util.goToNew(['pages/tax-form']);
        // }

        // }else{
        //   this.util.goToNew('pages/login')
        // }
    
      },async error => {
      //await laoder.dismiss();
      const toast = await this.api.createToast('Invalid VendorID or Password', false, 'top');
      await toast.present();
    })
   }, async error =>{
      const toast = await this.api.createToast('please use your permenant id', false, 'middle');
      await toast.present();
   })
    // this.router.navigate(['/password-change']);
 }

  moveToPsw(){
    this.router.navigate(['pages/forget-psw'])
  }
  moveToId(){
    this.router.navigate(['pages/forget-vendor-id'])
  }
  login(){
    this.router.navigate(['pages/login'])
  }

  
}
