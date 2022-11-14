import { Component } from '@angular/core';
import { User } from './pages/models/user';
import { Vendor } from './pages/models/vendor';
import { InituserService } from './service/inituser.service';
import {NavController} from '@ionic/angular'
import { UtilService } from './service/util.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 private loggedinUser:User;
 private loggedinVendor:any;
  constructor(private initUser: InituserService,
              private util: UtilService,
              private navCont: NavController) {
    this.loggedinUser = this.initUser.getUserData()
    this.loggedinVendor = this.initUser.getVendorData()
    console.log(this.loggedinVendor, this.loggedinVendor.Category)
    
    if (this.loggedinVendor.id !==null){
      if (this.loggedinVendor.approved === false){
      if(this.loggedinVendor.Confirm_new_password === null){
        this.util.goToNew('pages/password-change')
      }
      if(this.loggedinVendor.Confirm_new_password !== null){
        // else{
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

       if(this.loggedinVendor.tax_Details.length !==0){
        this.util.goToNew(['pages/tax-form']);
       }
       

    if(this.loggedinVendor.Taxform_upload !==null && this.loggedinVendor.SES_VSCform_upload !==null){
      this.util.goToNew(['pages/terms-conditions'])
    }
  if(this.loggedinVendor.first_agree === true && this.loggedinVendor.sec_agree ===true){
    this.util.goToNew(['pages/terms-conditions'])
  }

    if(this.loggedinVendor.completed ===true )
    { 
      this.util.goToNew(['pages/final-submission']);
    }
  }else{
    this.util.goToNew(['pages/login-information']);

  }

    }else{
      this.util.goToNew('pages/login')
    }
    
  }


}
