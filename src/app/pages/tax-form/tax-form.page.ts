import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.page.html',
  styleUrls: ['./tax-form.page.scss'],
})
export class TaxFormPage implements OnInit {

  public loggedInVendor:Vendor
 public browse=false
 public taxformupload=false
 public sesvscformupload=false
 vendortaxform={
  taxformcheck:false,
  formtype:'',
  taxformupload:'',
  sesvscformupload:''
}
  constructor(private router:Router,
    private inituser:InituserService,
    private firestore:FirestoreService,
    private api:ApiService) { }

  ngOnInit() {
  }
  moveToTerms(){
  this.loggedInVendor = this.inituser.getVendorData();
  const taxform:any={
      id: this.loggedInVendor.id,
      Taxform_check:this.browse,
      Formtype:this.vendortaxform.formtype,
      Taxform_upload:this.vendortaxform.taxformupload,
      SES_VSCform_upload:this.vendortaxform.sesvscformupload
    }
    if(this.vendortaxform.taxformupload.length !==0 && this.vendortaxform.sesvscformupload.length !==0){

      this.firestore.update('vendorAdd',taxform.id,taxform).then(res =>{
        console.log(res)
      })
      this.router.navigate(['pages/terms-conditions'])
    }
    this.fieldDetails()
  }
  moveToBack(){
    this.router.navigate(['pages/tax-record'])
  }

  fieldDetails(){
    if(this.vendortaxform.taxformupload.length ===0){
      this.taxformupload = true
    }else{
      this.taxformupload = false
    }
    if(this.vendortaxform.sesvscformupload.length ===0){
      this.sesvscformupload = true
    }else{
      this.sesvscformupload = false
    }
  }
  select(eve){
    console.log(eve.detail)
    if(eve.detail.checked === true){
      this.browse= true
    }else{
      this.browse= false

    }
  }
}
