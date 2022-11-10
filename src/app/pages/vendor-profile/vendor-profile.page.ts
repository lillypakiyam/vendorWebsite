import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.page.html',
  styleUrls: ['./vendor-profile.page.scss'],
})
export class VendorProfilePage implements OnInit {

  public loggedInVendor:Vendor;
  emailNotfill=false
  countryNotfill=false
  streetNotfill=false
  houseNotfill=false
  postalNotfill=false
  cityNotfill=false
  phoneNotfill=false
  public vendorProfile ={
    Address:'',
    company_name:'',
    former_name:'',
    email:'',
    confirm_email:'',
    street:'',
    country:'',
    house:'',
    street2:'',
    postal_code:'',
    city:'',
    po_Box_postal:'',
    po_Box:'',
    district:'',
    Region_state:'',
    ph_no:'',
    fax_No:''
  }
  constructor(private router:Router,
    private firestore: FirestoreService,
    private inituser:InituserService,
    private api: ApiService) { 
      this.emailNotfill = false

    }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['pages/password-change'])
  }
  moveTo(){
    this.loggedInVendor = this.inituser.getVendorData();
    const profile:any = {
      id:this.loggedInVendor.id,
      Address: this.vendorProfile.Address,
      Company_name: this.vendorProfile.company_name,
     former_name: this.vendorProfile.former_name,
      V_email:this.vendorProfile.email,
      confim_email:this.vendorProfile.confirm_email,
      street:this.vendorProfile.street,
      country:this.vendorProfile.country,
      house:this.vendorProfile.house,
      street2:this.vendorProfile.street2,
      postal_code:this.vendorProfile.postal_code,
      city:this.vendorProfile.city,
      po_postal:this.vendorProfile.po_Box_postal,
      po_Box:this.vendorProfile.po_Box,
      district:this.vendorProfile.district,
      region_state:this.vendorProfile.Region_state,
      ph_no:this.vendorProfile.ph_no,
      fax_no:this.vendorProfile.fax_No
    }
    if(this.vendorProfile.country.length !==0 && this.vendorProfile.email.length !==0 && this.vendorProfile.street.length !==0 &&
      this.vendorProfile.house.length !==0 && this.vendorProfile.city.length !==0 && this.vendorProfile.postal_code.length !==0 &&
       this.vendorProfile.ph_no.length !==0 ){
         this.firestore.update('vendorAdd',profile.id,profile).then(res=>{
         this.router.navigate(['pages/vendor-contact-profile']);
       })
      }
   console.log(this.vendorProfile.country, this.vendorProfile.email, this.vendorProfile.street)
  this.NewPassword()
  }

  NewPassword(){
    if(this.vendorProfile.email.length ===0){
      this.emailNotfill = true
    }else{
      this.emailNotfill = false
    }
    if(this.vendorProfile.country.length ===0){
      this.countryNotfill = true
    }else{
      this.countryNotfill = false
    }
    if(this.vendorProfile.street.length ===0){
      this.streetNotfill = true
    }else{
      this.streetNotfill = false
    }
    if(this.vendorProfile.house.length ===0){
      this.houseNotfill = true
    }else{
      this.houseNotfill = false
    }
    if(this.vendorProfile.postal_code.length ===0){
      this.postalNotfill = true
    }else{
      this.postalNotfill = false
    }
    if(this.vendorProfile.city.length ===0){
      this.cityNotfill = true
    }else{
      this.cityNotfill = false
    }
    if(this.vendorProfile.ph_no.length ===0){
      this.phoneNotfill = true
    }else{
      this.phoneNotfill = false
    }

  }
  login(){
    this.router.navigate(['/login'])
  }
  moveToPsw(){
    this.router.navigate(['/forget-psw']);
  }
  moveToId(){
    this.router.navigate(['/forget-vendor-id'])
  }
}
