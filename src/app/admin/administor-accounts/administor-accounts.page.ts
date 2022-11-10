import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import {Observable} from 'rxjs'
import { InituserService } from 'src/app/service/inituser.service';
import { User } from 'src/app/pages/models/user';
import * as moment from 'moment';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { UtilService } from 'src/app/service/util.service';
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
  alertc:any;
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
  view:boolean=true;
  Mange:boolean=false;
  constructor(private router: Router,
              private fireAuth:FirebaseAuthenticationService,
              private firestore: FirestoreService,
              private alert: AlertController,
              private loadCnt:LoadingController,
              private initUser : InituserService,
              private authentication: FirebaseAuthenticationService,
              private util: UtilService,
              private api : ApiService) { 
              this.addNewaccount=true;
              const currentDate = new Date();
              this.TodayDate = moment(currentDate).format('YYYY-MM-DD')
              console.log(this.TodayDate)
              this.loggedinUser = this.initUser.getUserData()
              console.log(this.loggedinUser)
              console.log(this.loggedinUser.email)
              if(this.view === true){
                this.vendoruser.viewersOnly ='Y'
                this.vendoruser.manageAdmin ='N'
             }
             console.log(this.vendoruser.manageAdmin, this.vendoruser.viewersOnly)
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
    console.log(eve.detail.value)
  if(eve.detail.checked === true){
    this.vendoruser.viewersOnly = eve.detail.value
    this.view = eve.detail.checked
    // this.vendoruser.manageAdmi
    this.Mange =false
    this.vendoruser.manageAdmin = 'Y'
  }else{
    this.vendoruser.viewersOnly ='N'
    this.vendoruser.manageAdmin = 'Y'

    this.view = eve.detail.checked
    this.Mange =true
  }
  console.log(this.view, this.Mange)
  console.log(this.vendoruser.manageAdmin, this.vendoruser.viewersOnly)
}

  selectManage(eve){
    console.log(eve, eve.detail.checked)
  if(eve.detail.checked === true){
  this.vendoruser.manageAdmin =eve.detail.value
    this.vendoruser.viewersOnly ='N'
    this.view = false
  // this.vendoruser.manageAdmi
  this.Mange =eve.detail.checked
  }else{
    this.vendoruser.viewersOnly ='Y'
    this.vendoruser.manageAdmin ='N'
    this.view = true
  // this.vendoruser.manageAdmi
  this.Mange =eve.detail.checked
  }
  // console.log(this.vendoruser.manageAdmin)
  console.log(this.vendoruser.manageAdmin, this.vendoruser.viewersOnly)
}

  moveTolog(){
    this.router.navigate(['admin/login']);
  }
  changepassword(){
    this.addNewaccount =false
  }
  sendVendorEmail(){
    // const email = new email.send()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vendordeveloper22@gmail.com",
        Password : "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
        // To : document.getElementById('requestEmail').value,
        To : this.vendoruser.email,
        From : 'vendordeveloper22@gmail.com',
        Subject : "admin account",
        Body : `${'we have created a new admin account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/admin/login'
                 userName : ${this.vendoruser.email},
                 password : ${this.vendoruser.password}
                 `,
    }).then(message =>{
      alert('message sent')
      // console.log(message)
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
        this.loading()
        }, err => {
          console.log(err);
        });  

        // this.api.getUser().subscribe(res=>{
        //   console.log('user name', res)
        //   console.log('res',res, res.name)
        //   // this.initUser.setLoggedInAdmin(res)
        // })
        this.NewPassword()
        this.addNewaccount = true;
      },async error =>{
        if(this.vendoruser.name.length ===0 && this.vendoruser.email.length ===0){
          this.NewPassword()
        }else{
          const toast = await this.api.createToast('the email id is already use in by another account', false, 'top');
          await toast.present();
  
         if(this.vendoruser.name.length ===0 || this.vendoruser.email.length ===0){
          this.NewPassword()
        }
        }
      })
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

 async moveToAdd(){
    if(this.loggedinUser.manageAdmin === 'Y'){
    this.addNewaccount=false;
    }else{
      this.addNewaccount=true;
      const toast = await this.api.createToast('you are not allowed', false, 'middle')
      await toast.present()
    }
  }

 async deleteAdmin(items){
    this.alertc = await this.util.createAlert(
      '',
      false,
      `Do you want to delete?`,
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: async () => {
            await this.alert.dismiss();
        }
      },
      {
         text: 'Yes',
         handler: async () => {
           await this.alert.dismiss();
           //  navigator['app'].exitApp();
           // console.log(items)
           this.adminUser.forEach((data, index) =>{
            // console.log(data, index)
            if(data.id === items.id){
              this.adminUser.splice(index, 1)
              console.log(data)
              this.firestore.delete('admin', items.id).then(async use =>{
                console.log(use)
                // this.router.navigate(['admin/invitedvendors'])
                const toast =await this.api.createToasts('successfully deleted',false,'middle')
                await toast.present()
              });
            }
          })
         }
      }
    ); 
    await this.alertc.present(); 
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

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Please enter your Email',
      buttons: [
        {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: async () => {
            await this.alert.dismiss();}
        },
        {
          text: 'Yes',
         handler: async () => {
          this.authentication.forgotPassoword(this.loggedinUser.email)
          this.loading()
         }
        }
      ],
      inputs: [
        {
          placeholder: 'Enter your Email id',
          attributes: {
            maxlength: 20,
          },
          value: this.loggedinUser.email
        },
        // {
        //   type: 'number',
        //   placeholder: 'Age',
        //   min: 1,
        //   max: 100,
        // },
        // {
        //   type: 'textarea',
        //   placeholder: 'A little about yourself',
        // },
      ],
    });

    await alert.present();
  }

  async loading(){
    const load =await this.loadCnt.create({
     message: 'sending...',
     duration: 3000,
     spinner: 'circles',
    })
    load.present()
   }
}
