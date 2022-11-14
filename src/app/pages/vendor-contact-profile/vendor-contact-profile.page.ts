import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { UtilService } from 'src/app/service/util.service';
import { Vendor } from '../models/vendor';

@Component({
  selector: 'app-vendor-contact-profile',
  templateUrl: './vendor-contact-profile.page.html',
  styleUrls: ['./vendor-contact-profile.page.scss'],
})
export class VendorContactProfilePage implements OnInit {

  public loggedInVendor:any;
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
    private util: UtilService,
    private inituser:InituserService,
    private firestore:FirestoreService) { 
    this.loggedInVendor = this.inituser.getVendorData();

    }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['pages/vendor-profile'])
  }
  moveTo(){
    this.loggedInVendor = this.inituser.getVendorData();
    const Contact:any = {
      id: this.loggedInVendor.id,
      first_name: this.loggedInVendor.first_name,
      last_name: this.loggedInVendor.last_name,
      relationship_type:this.loggedInVendor.relationship_type,
      contact_email:this.loggedInVendor.contact_email,
      phone_no:this.loggedInVendor.phone_no,
      faxno:this.loggedInVendor.faxno,
      login_level:'3',
    }
    if(this.loggedInVendor.first_name !==null && this.loggedInVendor.relationship_type !==null
      && this.loggedInVendor.contact_email !==null 
      && this.loggedInVendor.phone_no !==null){
        this.firestore.update('vendorAdd', Contact.id,Contact).then(res=>{
        this.router.navigate(['pages/bank-details']);
        })
    }
    this.fieldDetails()
  }

  fieldDetails(){
    if(this.loggedInVendor.first_name ===null){
      this.firstNotfill = true
    }else{
      this.firstNotfill = false
    }
    if(this.loggedInVendor.relationship_type ===null){
      this.reTypetNotfill = true
    }else{
      this.reTypetNotfill = false
    }
    if(this.loggedInVendor.phone_no ===null){
      this.phoneNotfill = true
    }else{
      this.phoneNotfill = false
    }
    if(this.loggedInVendor.contact_email ===null){
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
