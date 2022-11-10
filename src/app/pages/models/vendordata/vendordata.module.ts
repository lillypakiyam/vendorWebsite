export interface vendordata{
  // 1page
  id:number;
  Current_password:string,
   New_password:string,
  Confirm_new_password:string
  Address: string,
  Company_name: string,
  former_name: string,
  V_email:string,
  confim_email: string,
  street:string,
  country: string,
  house: any,
  street2:string,
  postal_code: string,
  city:string,
  po_postal:string,
  po_Box:any,
  district:string,
  region_state:string,
  ph_no:number,
  fax_no:any,
 
  // 2page
   first_name: string,
   last_name: string,
   relationship_type:any,
   contact_email:string,
   phone_no:number,
   faxno:string,
 
   //3PAGE
  Iban_country:string,
  iban:string,
  account:number,
  bank_code:string,
  bank_name:string,
  ibanStreet:string,    
  ibanCity:string,
  swift_bic:string ,    
  currency:string,
  document:any,
 
  //4page
    Category:string,
    Subcategory:string,
  //5page
   Tax_check:string,
   reason:string,
   Tax_number_type:string,
   Tax_number:string,
   tax_Details:[],
   Taxform_check:string,
   Formtype:any,
   Taxform_upload:any,
   SES_VSCform_upload:any,
 
   AgreeCheck:boolean,
   Note:string,
   first_agree: boolean,
   sec_agree: boolean,

   invoiceUpload:string
 }
 