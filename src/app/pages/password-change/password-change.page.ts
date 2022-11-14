import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { User } from '../models/user';
import { Vendor } from '../models/vendor';
import {updatePassword, getAuth} from 'firebase/auth'
@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {

  public code:any;
  private loggedInAdmin: Vendor;
  private loggedInAdminid: any;
  private loggedInVendor: any;
  private emailId:any;
  vendorColor=false
  passwordChange=false
  public vendorInfo ={
    current_password:'',
    new_password:'',
    confirm_new_password:''
  }
  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiService,
              private inituser: InituserService,
              private authentica: FirebaseAuthenticationService,
              private firestore: FirestoreService,) { 
                // this.code = this.route.snapshot.queryParams['oobCode'];
                // console.log(this.code)
                this.loggedInVendor = this.inituser.getVendorData()
                this.loggedInAdminid = this.inituser.getUserData()
                console.log(this.loggedInVendor, this.loggedInVendor.Confirm_new_password)
                // this.currentPass()
                this.vendorColor =false;
                // 14V9patao483twxiXL6FBbINRrSq35Kc_4IVvkWKGdYAAAGDorw9mQ
               
                
            }

  ngOnInit() {

  }
  
  moveTo(){
    this.loggedInAdmin = this.inituser.getVendorData();
    if(this.loggedInVendor.Current_password === this.loggedInVendor.temprory_password){
      if(this.loggedInVendor.New_password === this.loggedInVendor.Confirm_new_password){
        // console.log(this.loggedInAdmin)
        const psw:any = {
          id: this.loggedInAdmin.id,
          Current_password: this.loggedInVendor.Current_password,
          New_password: this.loggedInVendor.New_password,
          Confirm_new_password: this.loggedInVendor.Confirm_new_password,
          login_level:'1',
        }
        this.firestore.update('vendorAdd',psw.id,psw).then(res=>{
        console.log(res)
        this.router.navigate(['pages/vendor-profile']);
      })
      }
    }

  }

  currentPass(){
    if(this.loggedInVendor.Current_password !== this.loggedInVendor.temprory_password && this.loggedInVendor.Current_password !== null){
    return { 'border-color': 'red' }
    }
    if(this.loggedInVendor.Current_password === null){
    return { 'border-color': 'lightgray' }
    }
  }

  NewPassword(){
    if(this.loggedInVendor.New_password !== this.loggedInVendor.Confirm_new_password && this.loggedInVendor.Confirm_new_password !== null){

    return { 'border-color': 'red' }
    }
    if(this.loggedInVendor.Confirm_new_password === null){
    return { 'border-color': 'lightgray' }
    }
  }
  login(){
    this.router.navigate(['/login'])
  }
  moveToPsw(){
    this.router.navigate(['pages/forget-psw']);
  }
  moveToId(){
    this.router.navigate(['/forget-vendor-id'])
  }

  resetpassword(){
    if(this.loggedInVendor.Current_password === this.loggedInVendor.temprory_password){
      if(this.loggedInVendor.New_password === this.loggedInVendor.Confirm_new_password){
        console.log(this.loggedInVendor.New_password , this.loggedInVendor.Confirm_new_password)
    //    this.authentica.passEmail(this.code, this.vendorInfo.confirm_new_password).then(user =>{
    //    console.log(user)
    //    this.router.navigate(['pages/vendor-profile'])
    //   }).catch(error=>{
    //    console.log(error)
    //  })
    const auth = getAuth()
    const user = auth.currentUser
    console.log(auth, user)
    updatePassword(user, this.loggedInVendor.Confirm_new_password).then(res =>{
      console.log(res)
      this.moveTo()
      this.router.navigate(['pages/vendor-profile'])
    }).catch(err =>{
      this.router.navigate(['pages/login'])
    })
    }else{
     this.NewPassword() 
   }
  }else{
  console.log(this.loggedInVendor.Current_password !== this.loggedInVendor.temprory_password)
  console.log(this.loggedInVendor.Current_password)
  this.vendorColor =true;
  this.currentPass()
  }
 }

 Logout(){
  this.inituser.vendorLogout().then(logout =>{
    console.log('id:null', logout)
    this.router.navigate(['pages/logout']);
  })
  // this.router.navigate(['/logout'])
}
}
