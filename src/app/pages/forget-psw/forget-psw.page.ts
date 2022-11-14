import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { InituserService } from 'src/app/service/inituser.service';
import { UtilService } from 'src/app/service/util.service';
import {getAuth, updatePassword} from 'firebase/auth';
@Component({
  selector: 'app-forget-psw',
  templateUrl: './forget-psw.page.html',
  styleUrls: ['./forget-psw.page.scss'],
})
export class ForgetPswPage implements OnInit {

  vendorUser={
    email:'',
    password:'',
  }
  vendorEmail=false
  vendorPass=false
  constructor(private router : Router,
              private api:ApiService,
              private inituser: InituserService,
              private util: UtilService,
              private authentication: FirebaseAuthenticationService) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['pages/login'])

  }

  resetpass(){
    // this.authent.forgotPassoword(this.vendorUser.email)
    this.api.getvendorHistory(this.vendorUser.email).subscribe(async user=>{
      console.log(user)
      user.map(res=>{
        // this.temPassword = res.password
        console.log(res.temprory_password)
        this.authentication.login(this.vendorUser.email, res.temprory_password).then(res =>{
          console.log(res)
          console.log(res.uid)
          // this.api.loginUserId = res.uid
          // console.log(this.api.loginUserId)
        })
      })
    })
    this.vendorEmail=true;
    this.vendorPass=true;
  }

  createPass(){
    const auth = getAuth()
    const user = auth.currentUser
    console.log(auth, user)
    updatePassword(user, this.vendorUser.password).then(res =>{
      console.log(res)
      this.inituser.vendorLogout().then(logout =>{
        console.log('id:null', logout)
      })
    this.util.goBack('pages/login')
   }).catch(err =>{
      console.log(err)
    })
  }
}
