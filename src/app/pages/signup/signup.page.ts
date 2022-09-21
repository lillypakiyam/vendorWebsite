import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user={
    email:'',
    password:''
  }
  constructor(private fireauth:AngularFireAuth,
              private authen: FirebaseAuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  public createAccount(email: string, password: string): Promise<any> {
    return new Promise<any>((resolved, rejected) => {
      this.fireauth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            console.log(res.user)
            console.log(res.user.uid)
            resolved(res.user);
          } else {
            rejected(res);
          }
        })
        .catch(err => {
          rejected(err);
        });
    });
  }
  moveTo(){
    this.createAccount(this.user.email, this.user.password).then(user=>{
      console.log('user',user)
    })
    this.router.navigate(['admin/home']);
    console.log(this.user.email, this.user.password)
  }

}
