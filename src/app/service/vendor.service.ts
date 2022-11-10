import { Injectable } from '@angular/core';
import { vendordata } from '../pages/models/vendordata/vendordata.module';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

 public vendors:vendordata
  constructor() { 
    this.vendors={
      id:null,
      Current_password:null,
      New_password:null,
      Confirm_new_password:null,
      Address: null,
      Company_name: null,
      former_name: null,
      V_email:null,
      confim_email: null,
      street:null,
      country: null,
      house: null,
      street2:null,
      postal_code: null,
      city:null,
      po_postal:null,
      po_Box:null,
      district:null,
      region_state:null,
      ph_no:null,
      fax_no:null,

     // 2page
      first_name: null,
      last_name: null,
      relationship_type:null,
      contact_email:null,
      phone_no:null,
      faxno:null,

      //3PAGE
     Iban_country:null,
     iban:null,
     account:null,
     bank_code:null,
     bank_name:null,
     ibanStreet:null,    
     ibanCity:null,
     swift_bic:null ,    
     currency:null,
     document:null,

     Category:null,
     Subcategory:null,

     Tax_check:null,
    reason:null,
    Tax_number_type:null,
    Tax_number:null,
    tax_Details:[],
    
    Taxform_check:null,
    Formtype:null,
    Taxform_upload:null,
    SES_VSCform_upload:null,

    AgreeCheck:false,
    Note:null,
    first_agree: false,
    sec_agree: false,
    }
  
  }
}
