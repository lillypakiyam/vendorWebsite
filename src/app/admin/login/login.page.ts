import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service'
import { ApiService } from 'src/app/service/api.service';
import { InituserService } from 'src/app/service/inituser.service';
import { User } from 'src/app/pages/models/user';
// import { send } from 'process';
import {getAuth,updatePassword} from 'firebase/auth';
import {NavController} from '@ionic/angular'
// import {} from ''
import { UtilService } from 'src/app/service/util.service';
import { FirestoreService } from 'src/app/service/firestore.service';
declare let Email: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loggedinUser: User
  user={
    email:'',
    password:''
  }

  temPassword:string;
  forgetpass= false
  backlog= true
  constructor(private router: Router,
              private fireauth: AngularFireAuth,
              private api : ApiService,
              private initUser: InituserService,
              private navCont: NavController,
              private util: UtilService,
              private firestore: FirestoreService,
              private authentication: FirebaseAuthenticationService,
              ) { 
                
              }

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
      console.log(res.uid)
      this.api.loginUserId = res.uid
      console.log(this.api.loginUserId)
    const pass:any={
      password: this.user.password
    }

    this.firestore.update('admin',res.uid, pass).then(res=>{
      console.log(res)
    })

    this.router.navigate(['admin/home']); 
    this.initUser.setToken(res.uid)
    this.api.getUser().subscribe(user=>{
      console.log('user name', user)
      console.log('res',user.id, res.uid,)
      // if(user.id === res.uid){
        this.initUser.setLoggedInAdmin(user)
        this.loggedinUser = this.initUser.getUserData()
        console.log(this.loggedinUser)
      // }else{
      //   this.api.getAdminUser().subscribe(adminadd=>{
      //     console.log('user name', adminadd)
      //     console.log('adminadd',adminadd, adminadd.name)
      //     this.initUser.setLoggedInAdmin(adminadd)
      //     this.loggedinUser = this.initUser.getUserData()
      //     console.log(this.loggedinUser)
      //   })
      // }
      // res.map(user=>{
      // console.log('user name', user.name)
      // console.log('user name', user)
      // })
      // this.adminUser.push(res)
    })
    },async error => {
      //await laoder.dismiss();
      const toast = await this.api.createToast('Invalid AdminID or Password', false, 'top');
      await toast.present();
   })
    console.log(this.user.email, this.user.password)
  }

  resetpass(){
      // const email = new email.send()
      // this.api.getSchHistory(this.user.email).subscribe(user=>{
      //   console.log(user)
      //   user.map(res=>{
      //     this.temPassword = res.temporary_password
      //     console.log(res.temporary_password)
      //   })
      // })
      // Email.send({
      //     Host : "smtp.elasticemail.com",
      //     Username : "lilypackiyam@gmail.com",
      //     Password : "0527721E803854F2C924B66A3BAEAE2A03B2",
      //     // To : document.getElementById('requestEmail').value,
      //     To : this.user.email,
      //     From : 'lilypackiyam@gmail.com',
      //     Subject : "This is the subject",
      //     Body : `${'we have created a new admin account for you.Here is the link to activate the account.'}
      //              userName : ${this.user.email},
      //              password : ${this.temPassword}
      //              `,
       
      // }).then(message =>{
      //   alert('message sent')
      //   console.log(message)
      // })

      // this.fireauth.sendPasswordResetEmail(this.user.email, {url:'http://localhost:8100/pages/login',handleCodeInApp: false}).then(res =>{
      //   console.log(res)
      // })
    // this.authentication.forgotPassoword(this.user.email)
    // this.authentication.verificationCode(this.user.email)
    const auth = getAuth()
    const user = auth.currentUser
    console.log(auth, user)
    updatePassword(user, this.temPassword).then(res =>{
      console.log(res)
    })
    this.forgetpass = false
    this.backlog= true
  }

  forgetpassword(){
    this.util.goForward('admin/password')
    
  }

  async backlogin(){
    this.backlog= true
    this.forgetpass = false
    // const toast = await this.api.createToast('Link sent your email, please check the spam folder in your mail', false, 'top');
    //   await toast.present();
  }
  moveToLog(){
    this.router.navigate(['admin/signup']);

  }
}
