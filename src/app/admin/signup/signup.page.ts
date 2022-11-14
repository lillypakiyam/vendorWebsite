import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { User } from 'src/app/pages/models/user';
import { ApiService } from 'src/app/service/api.service';
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service'
import { InituserService } from 'src/app/service/inituser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private loggedinUser: User;
  user={
    name: '',
    phone: '',
    email:'',
    password:''
  }
  constructor(private fireauth:AngularFireAuth,
    private authen: FirebaseAuthenticationService,
    private inituser: InituserService,
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
      this.inituser.setToken(user['id'])
      this.api.getUser().subscribe(res=>{
        console.log('user name', res)
        console.log('res',res, res.name)
        this.inituser.setLoggedInAdmin(res)
        this.loggedinUser = this.inituser.getUserData()
        console.log(this.loggedinUser)
        // res.map(user=>{
        // console.log('user name', user.name)
        // console.log('user name', user)
        // })
        // this.adminUser.push(res)
      })
      // this.loggedinUser = this.inituser.getUserData()
      // console.log(this.loggedinUser)
    })
    this.router.navigate(['admin/home']);
    console.log(this.user.email, this.user.password)
  }

  moveToLog(){
    this.router.navigate(['admin/login']);
  }

}
