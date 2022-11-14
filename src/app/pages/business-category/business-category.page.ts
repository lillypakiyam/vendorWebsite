import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { UtilService } from 'src/app/service/util.service';
import { Vendor } from '../models/vendor';

@Component({
  selector: 'app-business-category',
  templateUrl: './business-category.page.html',
  styleUrls: ['./business-category.page.scss'],
})
export class BusinessCategoryPage implements OnInit {

  public loggedInVendor:any;
  categNot=false;
  subcategNot=false;
  vendorbusiCatg={
    category: '',
    subcategory: ''
  }
  constructor(private router:Router,
    private inituser:InituserService,
    private firestore:FirestoreService,
    private util:UtilService,
    private api:ApiService) { 
    this.loggedInVendor = this.inituser.getVendorData();
    }

  ngOnInit() {
  }
moveToBack(){
  this.router.navigate(['pages/bank-details'])
}
moveTo(){
  this.loggedInVendor = this.inituser.getVendorData();

  const cat:any={
    id:this.loggedInVendor.id,
    Category:this.loggedInVendor.Category,
    Subcategory:this.loggedInVendor.Subcategory,
    login_level:'5',

  }
  if(this.loggedInVendor.Category !==null && this.loggedInVendor.Subcategory !==null)
  {
    this.firestore.update('vendorAdd',cat.id,cat).then(res=>{
     console.log(res)
    this.router.navigate(['pages/tax-details'])
  })
  }
  console.log(this.loggedInVendor.id, this.loggedInVendor.Category, this.loggedInVendor.Subcategory)

  this.fieldDetails()
}

fieldDetails(){
  if(this.loggedInVendor.Category ===null){
    this.categNot = true
  }else{
    this.categNot = false
  }
  if(this.loggedInVendor.Subcategory ===null){
    this.subcategNot = true
  }else{
    this.subcategNot = false
  }
}
moveToLog(){
  this.router.navigate(['/logout'])
}

Logout(){
  this.inituser.vendorLogout().then(logout =>{
    console.log('id:null', logout)
    this.router.navigate(['pages/logout']);
  })
  // this.router.navigate(['/logout'])
}
}
