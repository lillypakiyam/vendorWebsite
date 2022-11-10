import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';
import { PasswordChangePage } from '../password-change/password-change.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 private loggedinVendor: any;
  vendorUser={
    email:'',
    password:''
  }
  constructor(private router: Router,
              private authent: FirebaseAuthenticationService,
              private firestore: FirestoreService,
              private initUser: InituserService,
              private api: ApiService) { 
                // this.api.getoneVendoruser().subscribe(user=>{
                //   console.log(user)
                // })
               this.loggedinVendor = this.initUser.getVendorData()
               console.log(this.loggedinVendor)

              }

  ngOnInit() {
  }
  
  moveTo(){
    this.api.logIn(this.vendorUser.email+'@gmail.com', this.vendorUser.password).subscribe(res=>{
      console.log(res)
      console.log(res.id)
     this.initUser.setToken(res.id)
     const pass:any={
       temprory_password: this.vendorUser.password
     }
      this.firestore.update('vendorAdd',res.id, pass).then(res=>{
        console.log(res)
     })
     this.api.getVendorUser().subscribe(user=>{
      console.log('user name', user)
      console.log('res',user.id)
      // if(user.id === res.uid){
        this.initUser.setLoggedInVendor(user)
        this.loggedinVendor = this.initUser.getVendorData()
        console.log(this.loggedinVendor)
      //  this.authent.forgotPassoword(this.vendorUser.email)
        this.router.navigate(['pages/password-change']);
      },async error => {
      //await laoder.dismiss();
      const toast = await this.api.createToast('Invalid VendorID or Password', false, 'top');
      await toast.present();
    })
   })
    // this.router.navigate(['/password-change']);
 }

  moveToPsw(){
    this.router.navigate(['pages/forget-psw'])
  }
  moveToId(){
    this.router.navigate(['pages/forget-vendor-id'])
  }
  login(){
    this.router.navigate(['pages/login'])
  }

  
}
