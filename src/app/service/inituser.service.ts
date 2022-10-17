import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular'
import * as moment from 'moment'; 
import { ApiService } from './api.service';
import {take} from 'rxjs/operators'
import { User } from '../pages/models/user';
import { Vendor } from '../pages/models/vendor';
@Injectable()
export class InituserService {
  private loggedInAdmin: any;
  private loggedInVendor: any;

  constructor(
               private storage: Storage,
               private api: ApiService) {
                this.storage.create();
                this.createEmptyUser();
                this.createEmptyVendor();
                }


  public getUserData(): User {
    return this.loggedInAdmin;
  }

  public getVendorData(): Vendor {
    return this.loggedInVendor;
  }
  
  load() {
    return new Promise((resolve, reject) => {
      this.getToken().then(token => {
        this.api.updateToken(token);
        if(token){
        this.api.getoneAdminuser().subscribe((adminData: any) => {
          if (adminData) {
            this.setLoggedInAdmin(adminData);
          }
          resolve(true);
        }, err => {
          resolve(true);
          console.log(err);
        });
        }else{
          resolve(true);
          console.log('ssd')
        }
      });
    });
  }

  Vendorload() {
    return new Promise((resolve, reject) => {
      this.getToken().then(token => {
        this.api.updateToken(token);
        if(token){
        this.api.getoneVendoruser().subscribe((vendorData: any) => {
          if (vendorData) {
            this.setLoggedInVendor(vendorData);
          }
          resolve(true);
        }, err => {
          resolve(true);
          console.log(err);
        });
        }else{
          resolve(true);
          console.log('ssd')
        }
      });
    });
  }

  createEmptyUser(){
    this.loggedInAdmin = {
    id: null,
    name: '',
    email: '',
    phone: '',
    viewersOnly :'' ,
    manageAdmin : '',
    temporary_password : '',
    token: ''
    };
  }
  
  createEmptyVendor(){
    this.loggedInVendor = {
    id: null,
    companyname:'',
    companyEmail:'',
    requestEmail:'',
    token: ''
    };
  }

  async setToken(token){
    const date = moment().format('ll');
    console.log(token)
    this.api.updateToken(token);
    await this.storage.set('token',token);
    await this.storage.set('aid', date);
    // await this.storage.create()
  }

  // async setItem(value): Promise<void>{
  //   this.api.updateID(value);
  //   console.log('value',value)
  //   await this.storage.({
  //      key: 'uid' ,
  //      value: JSON.stringify(value)
  //   });
  // }
  async getToken(){
    const date = moment().format('ll');
    const token = await this.storage.get('token');
    const aid = await this.storage.get('aid');
    //console.log(aid);
    if(moment(date).isSame(aid)){
      //console.log('same day');
      return token;
    }else{
      //console.log('diff day')
      this.storage.clear();
    }
    
  }

  async setLoggedInAdmin(adminInfo) {
    this.loggedInAdmin = adminInfo;
    console.log(this.loggedInAdmin)
    this.loggedInAdmin.token = await this.getToken();
    await this.storage.set('id', adminInfo.id); 
    console.log('SetLoggedInAdmin', adminInfo.id);
  } 
  
  async setLoggedInVendor(vendorInfo) {
    this.loggedInVendor = vendorInfo;
    console.log(this.loggedInVendor)
    this.loggedInVendor.token = await this.getToken();
    await this.storage.set('id', vendorInfo.id); 
    console.log('SetLoggedInvendor', vendorInfo.id);
  } 

  async logout(): Promise<any>{
    this.createEmptyUser();
    await this.api.logout();
    this.storage.clear();
  }

  async vendorLogout(): Promise<any>{
    // this.createEmptyUser();
    this.createEmptyVendor();
    await this.api.logout();
    this.storage.clear();
  }
}
