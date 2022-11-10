import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.page.html',
  styleUrls: ['./bank-details.page.scss'],
})
export class BankDetailsPage implements OnInit {

 public loggedInVendor:Vendor;
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
    private inituser:InituserService,
    private firestore:FirestoreService) { }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['pages/vendor-contact-profile'])
  }
  moveTo(){
    this.loggedInVendor = this.inituser.getVendorData();
    const Contact:any = {
      id:this.loggedInVendor.id,
      country:this.BankDetails.country,
      iban:this.BankDetails.IBAN,
      account:this.BankDetails.Account_no,
      bank_code:this.BankDetails.bank_code,
      bank_name:this.BankDetails.bank_name,
      street:this.BankDetails.street,
      city:this.BankDetails.city,
      swift_bic:this.BankDetails.swift_bic,
      currency:this.BankDetails.currency,
      document:this.BankDetails.document
    }
    if(this.BankDetails.country.length !==0 && this.BankDetails.Account_no.length !==0
      && this.BankDetails.bank_code.length !==0 && this.BankDetails.currency.length !==0
      && this.BankDetails.street.length !==0 && this.BankDetails.document.length !==0
      && this.BankDetails.city.length !==0 
      && this.BankDetails.swift_bic.length !==0 
      && this.BankDetails.bank_name.length !==0){
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
    if(this.BankDetails.country.length ===0){
      this.countryNot = true
    }else{
      this.countryNot = false
    }
    if(this.BankDetails.Account_no.length ===0){
      this.AccouNot = true
    }else{
      this.AccouNot = false
    }
    if(this.BankDetails.bank_code.length ===0){
      this.bankcodeNot = true
    }else{
      this.bankcodeNot = false
    }
    if(this.BankDetails.bank_name.length ===0){
      this.bankNameNot = true
    }else{
      this.bankNameNot = false
    }
    if(this.BankDetails.street.length ===0){
      this.streetNot = true
    }else{
      this.streetNot = false
    }
    if(this.BankDetails.city.length ===0){
      this.cityNot = true
    }else{
      this.cityNot = false
    }
    if(this.BankDetails.swift_bic.length ===0){
      this.swiftNot = true
    }else{
      this.swiftNot = false
    }
    if(this.BankDetails.currency.length ===0){
      this.currencyNot = true
    }else{
      this.currencyNot = false
    }
    if(this.BankDetails.document.length ===0){
      this.docNot = true
    }else{
      this.docNot = false
    }
   
  }
}
