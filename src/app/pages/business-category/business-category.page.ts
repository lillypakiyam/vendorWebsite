import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
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
    private api:ApiService) { }

  ngOnInit() {
  }
moveToBack(){
  this.router.navigate(['pages/bank-details'])
}
moveTo(){
  this.loggedInVendor = this.inituser.getVendorData();

  const cat:any={
    id:this.loggedInVendor.id,
    Category:this.vendorbusiCatg.category,
    Subcategory:this.vendorbusiCatg.subcategory
  }
  if(this.vendorbusiCatg.category.length !==0 && this.vendorbusiCatg.subcategory.length !==0)
  {
    this.firestore.update('vendorAdd',cat.id,cat).then(res=>{
     console.log(res)
    this.router.navigate(['pages/tax-details'])
  })
  }
  console.log(this.loggedInVendor.id, this.vendorbusiCatg.category, this.vendorbusiCatg.subcategory)

  this.fieldDetails()
}

fieldDetails(){
  if(this.vendorbusiCatg.category.length ===0){
    this.categNot = true
  }else{
    this.categNot = false
  }
  if(this.vendorbusiCatg.subcategory.length ===0){
    this.subcategNot = true
  }else{
    this.subcategNot = false
  }
}
moveToLog(){
  this.router.navigate(['/logout'])
}
}
