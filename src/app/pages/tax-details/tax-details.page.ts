import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { UtilService } from 'src/app/service/util.service';
import { Vendor } from '../models/vendor';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.page.html',
  styleUrls: ['./tax-details.page.scss'],
})
export class TaxDetailsPage implements OnInit {

  loggedInVendor:any;
  provided= false
  resonNot=false
  taxTypeNot=false
  taxNumNot=false

  taxdetails:any;
  Details:any=[];
  vendortax={
    taxcheck:false,
    reason:'',
    taxnumtype:'',
    taxnum:''
  }
  constructor(private router :Router,
    private inituser:InituserService,
    private util: UtilService,
    private firestore:FirestoreService,
    private api:ApiService) {
      this.loggedInVendor = this.inituser.getVendorData();
  this.provided= false
     }

  ngOnInit() {
  }
  moveToLog(){
    this.router.navigate(['/logout'])
  }
  moveToBack(){
    this.router.navigate(['pages/business-category'])
  }
  moveToFinal(){
    this.router.navigate(['/final-submission'])
  }
  moveToTaxRec(){
  this.loggedInVendor = this.inituser.getVendorData();
    const tax:any={
      id:this.loggedInVendor.id,
      Tax_check:this.provided,
      reason:this.provided === true ? this.loggedInVendor.reason: null,
      Tax_number_type:this.provided === false ? this.loggedInVendor.Tax_number_type:null,
      Tax_number:this.provided === false ? this.loggedInVendor.Tax_number:null,
      login_level:'6',

    }
    console.log(tax)
     
    if(!this.provided){
      // this.Details.push( this.taxdetails)
    this.loggedInVendor.tax_Details.push(tax)
    console.log(this.loggedInVendor.tax_Details)
    // this.Details.push(this.loggedInVendor.tax_Details)
    // const tass:any={
    //   'tax_Details':this.Details
    // }
    console.log(this.Details)

      if(this.loggedInVendor.Tax_number !==null && this.loggedInVendor.Tax_number_type !==null)
       { 
        // this.firestore.update('vendorAdd',tax.id, {serv}).then(res=>{
        //  console.log(res)
        this.api.updatetax(tax.id, {tax_Details: this.loggedInVendor.tax_Details}).then(tax=>{
          console.log(tax)
         this.router.navigate(['pages/tax-record']);
        })
       }
    }
    
    if(this.provided){
      this.taxdetails=tax
      this.loggedInVendor.tax_Details.push(this.taxdetails)
      // const tass:any={
      //   'tax_Details':this.Details
      // }
      console.log(this.Details)
      if(this.loggedInVendor.reason !==null)
       { 
        // this.firestore.update('vendorAdd',tax.id,tass).then(res=>{
        //  console.log(res)
        this.api.updatetax(tax.id, {tax_Details: this.loggedInVendor.tax_Details}).then(tax=>{
          console.log(tax)
        this.router.navigate(['pages/tax-record']);
        })
       }
    }
    
      console.log(this.loggedInVendor.id, this.loggedInVendor.Tax_number, 
      this.loggedInVendor.Tax_number_type, this.loggedInVendor.reason)

    this.fieldDetails();
  }

  select(eve){
    console.log(eve.detail)
    if(eve.detail.checked ===true){
      this.provided= true
    }else{
      this.provided= false
    }
  }

  fieldDetails(){

    if(this.provided){
      if(this.loggedInVendor.reason ===null){
        this.resonNot = true
      }else{
        this.resonNot = false
      }
    }

    if(!this.provided){
      if(this.loggedInVendor.Tax_number ===null){
        this.taxNumNot = true
      }else{
        this.taxNumNot = false
      }
  
      if(this.loggedInVendor.Tax_number_type ===null){
        this.taxTypeNot = true
      }else{
        this.taxTypeNot = false
      }
    }
  }
}
