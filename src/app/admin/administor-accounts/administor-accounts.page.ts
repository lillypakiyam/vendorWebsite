import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import {Observable} from 'rxjs'
import { InituserService } from 'src/app/service/inituser.service';
import { User } from 'src/app/pages/models/user';
import * as moment from 'moment';
// import { async } from '@firebase/util';
declare let Email: any;
@Component({
  selector: 'app-administor-accounts',
  templateUrl: './administor-accounts.page.html',
  styleUrls: ['./administor-accounts.page.scss'],
})
export class AdministorAccountsPage implements OnInit {

  private loggedinUser:User;
  adminUser:any=[];
  adminName:any;
  adminEmail:any;
  TodayDate:string
  public addNewaccount=false;
  nameNot=false
  emailNot=false
  public vendoruser={
    name:'',
    email:'',
    password:'',
    viewersOnly:'',
    manageAdmin:'',
  }
  constructor(private router: Router,
              private fireAuth:FirebaseAuthenticationService,
              private firestore: FirestoreService,
              private initUser : InituserService,
              private api : ApiService) { 
              this.addNewaccount=true;
              const currentDate = new Date();
              this.TodayDate = moment(currentDate).format('YYYY-MM-DD')
              console.log(this.TodayDate)
              this.loggedinUser = this.initUser.getUserData()
              console.log(this.loggedinUser.email)
             }

  ngOnInit() {
    this.getadmindetails()
    
  }

  getadmindetails(){
    // console.log(this.api.adminId)
    this.adminUser=[]
    this.api.getallAdmin().subscribe(res=>{
      res.map(user=>{
      console.log('user name', user.name)
      this.adminUser.push(user)
      // this.adminName= user.name
      // this.adminEmail= user.email

      })
      console.log('res',res, res.name)
      // this.adminUser.push(res)
    })
  }
  moveTo(){
    this.router.navigate(['admin/home']);
    console.log('home')
  }

  loginName(eve){
    // console.log(eve.target.value +'@123')
    this.vendoruser.password = eve.target.value+'@123'
    this.vendoruser.name = eve.target.value
    console.log(this.vendoruser.name)
    console.log(this.vendoruser.password)
  }

  emailsubmit(event){
  // console.log(event.target.value)
  this.vendoruser.email = event.target.value
  console.log(this.vendoruser.email)
  }

  selectViews(eve){
  if(eve.detail.checked === true){
    this.vendoruser.viewersOnly =eve.detail.value;
  }else{
    this.vendoruser.viewersOnly ='No'
  }
  console.log(this.vendoruser.viewersOnly)
  }

  selectManage(eve){
    console.log(eve)
  if(eve.detail.checked === true){
  this.vendoruser.manageAdmin =eve.detail.value
  }else{
    this.vendoruser.viewersOnly ='No'
  }
  console.log(this.vendoruser.manageAdmin)

  }
  moveTolog(){
    this.router.navigate(['admin/login']);
  }

  sendVendorEmail(){
    // const email = new email.send()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lilypackiyam@gmail.com",
        Password : "0527721E803854F2C924B66A3BAEAE2A03B2",
        // To : document.getElementById('requestEmail').value,
        To : this.vendoruser.email,
        From : 'lilypackiyam@gmail.com',
        Subject : "This is the subject",
        Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/admin/login'
                 userName : ${this.vendoruser.email},
                 password : ${this.vendoruser.password}
                 
                 `,
                 
     
    }).then(message =>{
      // alert('message sent')
      console.log(message)
    })
  }

  submit(){
    this.loggedinUser = this.initUser.getUserData()
    console.log(this.loggedinUser)
    console.log('username',this.vendoruser.email,this.vendoruser.name)
    const adminInfo = {
      'id' :  null,
      'name' : this.vendoruser.name,
      'email' : this.vendoruser.email,
      'viewersOnly' : this.vendoruser.viewersOnly,
      'manageAdmin' : this.vendoruser.manageAdmin,
      'password' : this.vendoruser.password,
      'invite_Date': this.TodayDate,
      'login_date': null,
      'invited_by': this.loggedinUser.email,
      'login_level':null,

    };
    // return new Observable((observer) => {
      this.fireAuth.createAccount(this.vendoruser.email,this.vendoruser.password).then(user=>{
      console.log('user',user)
      console.log('user',user.uid)
      adminInfo.id = user.uid;
      //  this.initUser.setToken(user.uid)
        this.firestore.createWithId('admin', adminInfo).then(async usr => {
          console.log(usr);
         console.log(adminInfo);
         this.sendVendorEmail()
        //  const toast = await this.api.createToasts('the vendor added & email sent successfully', false, 'top');
        //  await toast.present();
        }, err => {
          console.log(err);
        });  

        // this.api.getUser().subscribe(res=>{
        //   console.log('user name', res)
        //   console.log('res',res, res.name)
        //   // this.initUser.setLoggedInAdmin(res)
        // })
        this.NewPassword()
      }, async error =>{
        if(this.vendoruser.name.length ===0 && this.vendoruser.email.length ===0){
          this.NewPassword()
        }else{
          const toast = await this.api.createToast('the email id is already use in by another account', false, 'top');
          await toast.present();
  
         if(this.vendoruser.name.length ===0 || this.vendoruser.email.length ===0){
          this.NewPassword()
        }
        }
      } )
  // })
    // this.api.signUpAdd(this.vendoruser).subscribe(user=>{
    //   console.log('user',user)
    //   // this.api.adminId = user['id']
    //   console.log('user',user['id'])
    // })
  }

  NewPassword(){
    if(this.vendoruser.name.length ===0){
      this.nameNot = true
    }else{
      this.nameNot = false
    }
    if(this.vendoruser.email.length ===0){
      this.emailNot = true
    }else{
      this.emailNot = false
    }
    
  }

  moveToAdd(){
    this.addNewaccount=false;
  }
  close(){
    this.addNewaccount=true;
  }

  inviteNav(data){
    if('home' === data){
    this.router.navigate(['admin/home'])
    }
    if('toplevel' === data){
      this.router.navigate(['admin/top-level'])
    }
    if('purchase' === data){
      this.router.navigate(['admin/purchase-order'])
    }
    if('vendorinfo' === data){
      this.router.navigate(['admin/vendor-info'])
    }
    if('invitedvendors' === data){
      this.router.navigate(['admin/invitedvendors'])
    }
    // if('invited' === data){
    //   this.router.navigate(['admin/adminitor-accounts'])
    // }
    
  }
}
