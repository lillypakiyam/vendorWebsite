import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { UtilService } from 'src/app/service/util.service';
import { Vendor } from '../models/vendor';
import {environment} from 'src/environments/environment';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import {File} from '@awesome-cordova-plugins/file/ngx'
import { File } from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import { FirestorageService } from 'src/app/service/firestorage.service';
import {UUID} from 'angular2-uuid';
      
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.page.html',
  styleUrls: ['./bank-details.page.scss'],
})
export class BankDetailsPage implements OnInit {
  fileToUpload: FileList;
  files: File;
 public loggedInVendor:any;
 public conName;
 public currency=[];
 countryNot=false
 AccouNot=false
 bankcodeNot=false
 bankNameNot=false
 streetNot=false
 cityNot=false
 swiftNot=false
 currencyNot=false
 docNot=false
  public BankDetails ={
    country:'',
    IBAN:'',
    Account_no:'',
    bank_code:'',
    bank_name:'',
    street:'',
    city:'',
    swift_bic:'',
    currency:'',
    document:''
  }
  constructor(private router:Router,
    private api:ApiService,
    private util: UtilService,
    private file: File,
    private fileTransfer: FileTransfer,
    private fileopen: FileOpener,
               private storageSer: FirestorageService,
               private inituser:InituserService,
    private firestore:FirestoreService) {
    this.loggedInVendor = this.inituser.getVendorData();
    this.conName = environment.COUNTRY_WITH_CURRENCIES
    this.currency = this.conName
    environment.COUNTRY_WITH_CURRENCIES.map(user =>{
      // console.log(user.code)
      // this.country.push(user.name) 
    })
    console.log(this.currency)

     }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['pages/vendor-contact-profile'])
  }
  moveTo(){
    this.loggedInVendor = this.inituser.getVendorData();
    const Contact:any = {
      id:this.loggedInVendor.id,
      Iban_country:this.loggedInVendor.Iban_country,
      iban:this.loggedInVendor.iban,
      account:this.loggedInVendor.account,
      bank_code:this.loggedInVendor.bank_code,
      bank_name:this.loggedInVendor.bank_name,
      ibanStreet:this.loggedInVendor.ibanStreet,
      ibanCity:this.loggedInVendor.ibanCity,
      swift_bic:this.loggedInVendor.swift_bic,
      currency:this.loggedInVendor.currency,
      document:this.loggedInVendor.document,
      login_level:'4',
    }
    if(this.loggedInVendor.Iban_country !==null && this.loggedInVendor.account !==null
      && this.loggedInVendor.bank_code !==null && this.loggedInVendor.currency !==null
      && this.loggedInVendor.ibanStreet !==null && this.loggedInVendor.document !==null
      && this.loggedInVendor.ibanCity !==null 
      && this.loggedInVendor.swift_bic !==null 
      && this.loggedInVendor.bank_name !==null){
        this.firestore.update('vendorAdd',Contact.id,Contact).then(res=>{
        this.router.navigate(['pages/business-category'])
      })

      }
    this.fieldDetails()
  }
  moveToLog(){
    this.router.navigate(['/logout'])
  }

  fieldDetails(){
    if(this.loggedInVendor.Iban_country ===null){
      this.countryNot = true
    }else{
      this.countryNot = false
    }
    if(this.loggedInVendor.account ===null){
      this.AccouNot = true
    }else{
      this.AccouNot = false
    }
    if(this.loggedInVendor.bank_code ===null){
      this.bankcodeNot = true
    }else{
      this.bankcodeNot = false
    }
    if(this.loggedInVendor.bank_name ===null){
      this.bankNameNot = true
    }else{
      this.bankNameNot = false
    }
    if(this.loggedInVendor.ibanStreet ===null){
      this.streetNot = true
    }else{
      this.streetNot = false
    }
    if(this.loggedInVendor.ibanCity ===null){
      this.cityNot = true
    }else{
      this.cityNot = false
    }
    if(this.loggedInVendor.swift_bic ===null){
      this.swiftNot = true
    }else{
      this.swiftNot = false
    }
    if(this.loggedInVendor.currency ===null){
      this.currencyNot = true
    }else{
      this.currencyNot = false
    }
    if(this.loggedInVendor.document ===null){
      this.docNot = true
    }else{
      this.docNot = false
    }
   
  }

  fileopens(){
     this.file.checkDir(this.file.dataDirectory, 'mydir').then(fil =>{
      console.log(fil)
     })
  }
  fileupload(event){
    console.log(event)
    this.files = event.target.files[0]
    console.log(this.files)
    console.log(event.target.files[0].name)
    const name = event.target.files[0].name;
    this.storageSer.uploadContent(this.files, name).then(async success => {
    // await this.loadingCtrl.dismiss();
    // this.createToast('image uploded', true, 'bottom', 2100);
    console.log('success', success);
    this.loggedInVendor.document = success.url
    console.log('success url', this.loggedInVendor.document);
   
    }).catch(async err => {
    // await this.loadingCtrl.dismiss();
    // this.createToast(`${err}`, true, 'bottom', 2100);
    console.log('err', err);
    });
  }

  Logout(){
    this.inituser.vendorLogout().then(logout =>{
      console.log('id:null', logout)
      this.router.navigate(['pages/logout']);
    })
    // this.router.navigate(['/logout'])
  }
}
