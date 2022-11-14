import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';
import { VendorService } from 'src/app/service/vendor.service'
import { UtilService } from 'src/app/service/util.service';
import {environment} from 'src/environments/environment'
@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.page.html',
  styleUrls: ['./vendor-profile.page.scss'],
})
export class VendorProfilePage implements OnInit {

  public loggedInVendor:any;
  public conName;
  public country=[];
  emailNotfill=false;
  countryNotfill=false;
  streetNotfill=false;
  houseNotfill=false;
  postalNotfill=false;
  cityNotfill=false;
  phoneNotfill=false;
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
    private util: UtilService,
    private vendorservice: VendorService,
    private api: ApiService) { 
      this.emailNotfill = false
    console.log(this.vendorservice.vendors.Address, this.vendorservice.vendors.Company_name)
    this.loggedInVendor = this.inituser.getVendorData();
    console.log(this.loggedInVendor)
    console.log('country',this.country)
    console.log('country',environment.COUNTRY_WITH_CURRENCIES)
    this.conName = environment.COUNTRY_WITH_CURRENCIES
    this.country = this.conName
    environment.COUNTRY_WITH_CURRENCIES.map(user =>{
      console.log(user)
      // this.country.push(user.name) 
    })
    console.log(this.country)

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
      Address: this.loggedInVendor.Address,
      Company_name: this.loggedInVendor.Company_name,
      former_name: this.loggedInVendor.former_name,
      V_email:this.loggedInVendor.V_email,
      confim_email:this.loggedInVendor.confim_email,
      street:this.loggedInVendor.street,
      country:this.loggedInVendor.country,
      house:this.loggedInVendor.house,
      street2:this.loggedInVendor.street2,
      postal_code:this.loggedInVendor.postal_code,
      city:this.loggedInVendor.city,
      po_postal:this.loggedInVendor.po_postal,
      po_Box:this.loggedInVendor.po_Box,
      district:this.loggedInVendor.district,
      region_state:this.loggedInVendor.region_state,
      ph_no:this.loggedInVendor.ph_no,
      fax_no:this.loggedInVendor.fax_no,
      login_level:'2',
    }
    if(this.loggedInVendor.country !==null && this.loggedInVendor.V_email !==null && this.loggedInVendor.street !==null &&
      this.loggedInVendor.house !==null && this.loggedInVendor.city !==null && this.loggedInVendor.postal_code !==null &&
       this.loggedInVendor.ph_no !==null ){
         this.firestore.update('vendorAdd',profile.id,profile).then(res=>{
         this.router.navigate(['pages/vendor-contact-profile']);
       })
    }
   console.log(this.loggedInVendor.country, this.loggedInVendor.V_email, this.loggedInVendor.street)
   this.NewPassword()
  }

  NewPassword(){
    if(this.loggedInVendor.V_email ===null){
      this.emailNotfill = true
    }else{
      this.emailNotfill = false
    }
    if(this.loggedInVendor.country ===null){
      this.countryNotfill = true
    }else{
      this.countryNotfill = false
    }
    if(this.loggedInVendor.street ===null){
      this.streetNotfill = true
    }else{
      this.streetNotfill = false
    }
    if(this.loggedInVendor.house ===null){
      this.houseNotfill = true
    }else{
      this.houseNotfill = false
    }
    if(this.loggedInVendor.postal_code ===null){
      this.postalNotfill = true
    }else{
      this.postalNotfill = false
    }
    if(this.loggedInVendor.city ===null){
      this.cityNotfill = true
    }else{
      this.cityNotfill = false
    }
    if(this.loggedInVendor.ph_no ===null){
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

  //email
  // vendordeveloper22@gmail.com
  // password:4E84AFEF21BAECED968AECFB50C018AD0D48
  // EBB99C1A1A1C71FFE9E6F9EE64F38E041E20
  // server: smtp.elasticemail.com
  // port: 2525
}
