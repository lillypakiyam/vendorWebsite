import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestorageService } from 'src/app/service/firestorage.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';
import * as moment from 'moment';
@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.page.html',
  styleUrls: ['./tax-form.page.scss'],
})
export class TaxFormPage implements OnInit {

  files: File;
  sesfiles: File;
  taxName: any;
  sesName: any;
  TodayDate:string;
  public loggedInVendor:any
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
    private storageSer: FirestorageService,
    private api:ApiService) { 
  this.loggedInVendor = this.inituser.getVendorData();
  const currentDate = new Date();
  this.TodayDate = moment(currentDate).format('YYYY-MM-DD')
    }

  ngOnInit() {
  }
  moveToTerms(){
  const taxform:any={
      id: this.loggedInVendor.id,
      Taxform_check:this.browse,
      Formtype:this.loggedInVendor.Formtype,
      Taxform_upload:this.loggedInVendor.Taxform_upload,
      SES_VSCform_upload:this.loggedInVendor.SES_VSCform_upload,
      upload_Date: this.TodayDate,
      login_level:'7',
    }
    console.log(taxform)
    if(this.loggedInVendor.Taxform_upload !==null && this.loggedInVendor.SES_VSCform_upload !==null){
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
    if(this.loggedInVendor.Taxform_upload ===null){
      this.taxformupload = true
    }else{
      this.taxformupload = false
    }
    if(this.loggedInVendor.SES_VSCform_upload ===null){
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

  fileupload(event){
    console.log(event)
    this.files = event.target.files[0]
    console.log(this.files)
    console.log(event.target.files[0].name)
    const name = event.target.files[0].name;
    this.taxName = name;
    this.storageSer.uploadContent(this.files, this.taxName).then(async success => {
      console.log('success', success);
      this.loggedInVendor.Taxform_upload = success.url
      console.log('success url', this.loggedInVendor.Taxform_upload);
   
    }).catch(async err => {
      console.log('err', err);
    });
  }

  fileSesupload(event){
    console.log(event)
    this.sesfiles = event.target.files[0]
    console.log(this.files)
    console.log(event.target.files[0].name)
    const name = event.target.files[0].name;
    this.sesName = name;

    this.storageSer.uploadContent(this.sesfiles, this.sesName).then(async success => {
      console.log('success', success);
      this.loggedInVendor.SES_VSCform_upload = success.url 
      console.log('success url', this.loggedInVendor.SES_VSCform_upload);
    }).catch(async err => {
      console.log('err', err);
      });
  }

}
