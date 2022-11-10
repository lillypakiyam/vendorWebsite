import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';

@Component({
  selector: 'app-vendor-contact-profile',
  templateUrl: './vendor-contact-profile.page.html',
  styleUrls: ['./vendor-contact-profile.page.scss'],
})
export class VendorContactProfilePage implements OnInit {

  public loggedInVendor:Vendor
  public firstNotfill=false;
  public reTypetNotfill=false;
  public contactEmailNotfill=false;
  public phoneNotfill=false;
  public faxNotfill=false;
  public vendorContact ={
    first_name:'',
    last_name:'',
    relationship_type:'',
    contact_email:'',
    ph_no:'',
    fax_No:''
  }
  constructor(private router:Router,
    private api: ApiService,
    private inituser:InituserService,
    private firestore:FirestoreService) { }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['pages/vendor-profile'])
  }
  moveTo(){
    this.loggedInVendor = this.inituser.getVendorData();
    const Contact:any = {
      id: this.loggedInVendor.id,
      Company_name: this.vendorContact.first_name,
     former_name: this.vendorContact.last_name,
      relationship_type:this.vendorContact.relationship_type,
      contact_email:this.vendorContact.contact_email,
      ph_no:this.vendorContact.ph_no,
      fax_no:this.vendorContact.fax_No
    }
    if(this.vendorContact.first_name.length !==0 && this.vendorContact.relationship_type.length !==0
      && this.vendorContact.contact_email.length !==0 
      && this.vendorContact.ph_no.length !==0){

        this.firestore.update('vendorAdd', Contact.id,Contact).then(res=>{
        this.router.navigate(['pages/bank-details']);
    })
      }
    this.fieldDetails()
  }

  fieldDetails(){
    if(this.vendorContact.first_name.length ===0){
      this.firstNotfill = true
    }else{
      this.firstNotfill = false
    }
    if(this.vendorContact.relationship_type.length ===0){
      this.reTypetNotfill = true
    }else{
      this.reTypetNotfill = false
    }
    if(this.vendorContact.ph_no.length ===0){
      this.phoneNotfill = true
    }else{
      this.phoneNotfill = false
    }
    if(this.vendorContact.contact_email.length ===0){
      this.contactEmailNotfill = true
    }else{
      this.contactEmailNotfill = false
    }
   
  }
  Logout(){
    this.inituser.vendorLogout().then(logout =>{
      console.log('id:null', logout)
      this.router.navigate(['pages/logout']);
    })
    // this.router.navigate(['/logout'])
  }
  login(){
    this.router.navigate(['/login'])
  }

  
}
