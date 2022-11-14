import { Component, OnInit } from '@angular/core';
import { async } from '@firebase/util';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { UtilService } from 'src/app/service/util.service';
import {getAuth, updatePassword} from 'firebase/auth'
import { InituserService } from 'src/app/service/inituser.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  getEmail=false
  getpassword=false
  public user={
    email:'',
    password:''
  }
  temPassword:string;
  constructor(private util: UtilService,
              private authentication: FirebaseAuthenticationService,
              private inituser: InituserService,
              private api: ApiService) { }

  ngOnInit() {
  }
  login(){
    this.util.goBack('admin/login')
  }

  resetpass(){
    this.api.getSchHistory(this.user.email).subscribe(async user=>{
        console.log(user)
        user.map(res=>{
          this.temPassword = res.password
          console.log(res.password, this.temPassword)
          this.authentication.login(this.user.email, res.password).then(res =>{
            console.log(res)
            console.log(res.uid)
            this.api.loginUserId = res.uid
            console.log(this.api.loginUserId)
          })
        })
      })
      // console.log(this.temPassword)
      this.getEmail=true
      this.getpassword=true
  }

  createPassword(){
    const auth = getAuth()
    const user = auth.currentUser
    console.log(auth, user)
    updatePassword(user, this.user.password).then(res =>{
      console.log(res)
      this.inituser.logout().then(logout =>{
        console.log('id:null', logout)
      })
    this.util.goBack('admin/login')
   }).catch(err =>{
      console.log(err)
    })
  }
}
