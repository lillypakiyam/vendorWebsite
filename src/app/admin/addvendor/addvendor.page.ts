import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { NgForm } from '@angular/forms';
import { InituserService } from 'src/app/service/inituser.service';
import { ApiService } from 'src/app/service/api.service';
import { Vendor } from 'src/app/pages/models/vendor';
import { UtilService } from 'src/app/service/util.service';
import * as moment from 'moment';
// import  './../../../assets/js/smtp.js ';
declare let Email: any;
@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.page.html',
  styleUrls: ['./addvendor.page.scss'],
})
export class AddvendorPage implements OnInit {

  private loggedInVendor:Vendor
  private loggedInAdmin:any;
  public fileupload:any;
  public numberId:any;
  public emailId:any;
  TodayDate:string;
  private venid='lilly';
  public randomId:any
  public passhide=false;
  public companynameNot=false;
  public companyEmailNot=false;
  public requestEmailNot=false;
  public company={
    companyname:'',
    companyEmail:'',
    requestEmail:'',
  }
  constructor(private router:Router,
              private firestore: FirestoreService,
              private initUser: InituserService,
              private api: ApiService,
              private util: UtilService,
              private fireauth : FirebaseAuthenticationService,) { 
                const currentDate = new Date();
                this.TodayDate = moment(currentDate).format('YYYY-MM-DD')
                console.log(this.TodayDate)
                this.loggedInAdmin = this.initUser.getUserData();
                console.log(this.loggedInAdmin.email)
               
              }

  ngOnInit() {
  }

  moveToAd(){
    this.router.navigate(['admin/administrator-accounts'])
  }
  back(){
    this.router.navigate(['admin/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['admin/home'])
  }

  inviteNav(data){
    if('toplevel' === data){
      this.router.navigate(['admin/top-level'])
    }
    if('purchase' === data){
      this.router.navigate(['admin/purchase-order'])
    }
    if('vendorinform' === data){
      this.router.navigate(['admin/vendor-info'])
    }
    if('invited' === data){
    this.router.navigate(['admin/invitedvendors'])
   }
  }
  // requestEmail(event){
  //   console.log(event.target.value)
  //   this.company.requestEmail = event.target.value
  // }

  sendVendorEmail(){
    // const email = new email.send()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lilypackiyam@gmail.com",
        Password : "0527721E803854F2C924B66A3BAEAE2A03B2",
        // To : document.getElementById('requestEmail').value,
        To : this.company.requestEmail,
        From : 'lilypackiyam@gmail.com',
        Subject : "This is the subject",
        Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 Temporary Id : ${this.numberId},
                 password : ${this.randomId}
                 `,
                 
     
    }).then(message =>{
      alert('message sent')
      console.log(message)
    })
  }

  fileuploads(){
    console.log('companyname',this.company.companyname)
    console.log('companyEmail',this.company.companyEmail)
    console.log('requestEmail',this.company.requestEmail)
    // document.getElementById('random_id').val
    var random_id = '';
    // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var characters = '1234567890';
    for(var i=0; i < 7; i++){
      random_id += characters.charAt(Math.floor(Math.random() * characters.length)); 
   }
   this.randomId = random_id
   console.log(this.randomId)

   var email_id = '';
   // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var characters = '1234567890';
   for(var i=0; i < 5; i++){
     email_id += characters.charAt(Math.floor(Math.random() * characters.length)); 
     this.numberId = 'TEMP'+email_id
     console.log(this.numberId)
   }
   this.emailId = this.numberId+'@gmail.com'
   console.log(this.emailId)
    const vendorInfo={
      id:null,
      companyname:this.company.companyname,
      companyEmail:this.company.companyEmail,
      requestEmail:this.company.requestEmail,
      temporaryId:this.numberId,
      temprory_password: this.randomId,
      invite_Date: this.TodayDate,
      login_date: null,
      invited_by: this.loggedInAdmin.email,
      login_level:null,
    }
    console.log(this.emailId, this.randomId)
    this.fireauth.createAccount(this.emailId,this.randomId).then(user=>{
      console.log(this.randomId)
      console.log('user',user)
      console.log('user',user.uid)
      this.sendVendorEmail()
      vendorInfo.id = user.uid;
      // this.initUser.setToken(user.uid)
        this.firestore.createWithId('vendorAdd', vendorInfo).then(async usr => {
          console.log(usr);
        //  console.log(adminInfo);
        const toast = await this.api.createToasts('the vendor successfully added & email sent', false, 'top');
        await toast.present();
        this.util.goForward('admin/invitedvendors')
        }, err => {
          console.log(err);
        });  

        this.util.goForward('admin/addvendor')
        this.NewPassword()
        
      }, async err =>{
      // if(this.company.requestEmail.length !==0){
       
      // }
      if(this.company.companyname.length ===0 && this.company.companyEmail.length ===0 && this.company.requestEmail.length ===0){
        this.NewPassword()
      }else{
        const toast = await this.api.createToast('the email id is already use in by another account', false, 'top');
        await toast.present();

        if(this.company.companyname.length ===0 || this.company.companyEmail.length ===0 || this.company.requestEmail.length ===0){
         this.NewPassword()
        }
      }

    })

  }

  NewPassword(){
    if(this.company.companyname.length ===0){
      this.companynameNot = true
    }else{
      this.companynameNot = false
    }
    if(this.company.companyEmail.length ===0){
      this.companyEmailNot = true
    }else{
      this.companyEmailNot = false
    }
    if(this.company.requestEmail.length ===0){
      this.requestEmailNot = true
    }else{
      this.requestEmailNot = false
    }
  }

}

