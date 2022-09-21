import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    email:'',
    password:''
  }
  constructor(private router: Router,
              private fireauth: AngularFireAuth,
              private authentication: FirebaseAuthenticationService,
              ) { }

  ngOnInit() {
  }

  // public createAccount(email: string, password: string): Promise<any> {
  //   return new Promise<any>((resolved, rejected) => {
  //     this.fireauth.createUserWithEmailAndPassword(email, password)
  //       .then(res => {
  //         if (res.user) {
  //           console.log(res.user)
  //           resolved(res.user);
  //         } else {
  //           rejected(res);
  //         }
  //       })
  //       .catch(err => {
  //         rejected(err);
  //       });
  //   });
  // }
  moveTo(){
    // this.createAccount(this.user.email, this.user.password).then(user=>{
    //   console.log('user',user)
    // })
    this.authentication.login(this.user.email, this.user.password).then(res =>{
      console.log(res)
    })
    this.router.navigate(['admin/home']);
    console.log(this.user.email, this.user.password)
  }
}
