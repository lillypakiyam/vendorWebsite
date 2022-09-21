import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user={
    name: '',
    phone: '',
    email:'',
    password:''
  }
  constructor(private fireauth:AngularFireAuth,
    private authen: FirebaseAuthenticationService,
    private api: ApiService,
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
    this.api.signUp(this.user).subscribe(user=>{
      console.log('user',user)
      this.api.adminId = user['id']
      console.log('user',user['id'])
    })
    this.router.navigate(['admin/home']);
    console.log(this.user.email, this.user.password)
  }

  moveToLog(){
    this.router.navigate(['admin/login']);
  }

}
