import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { InituserService } from 'src/app/service/inituser.service';
import { Vendor } from '../models/vendor';
import * as moment from 'moment';
import {updatePassword, getAuth, updateEmail} from 'firebase/auth';
declare let Email: any;

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {
  effective_Date:string
  decision_Date:string
  public loggedInVendor:any;
  agree: boolean= false;
  private emailId:any;
  private numberId:any;
  agreeTerms: boolean=false;
  vendorterms={
    agreecheck: false,
    note:''
  }
  public termcheck=false
  constructor(private router: Router,
    private inituser:InituserService,
    private firestore:FirestoreService,
    private api:ApiService) { 
      this.loggedInVendor = this.inituser.getVendorData()
      console.log(this.loggedInVendor, this.loggedInVendor.requestEmail, this.loggedInVendor.Confirm_new_password)

      
   
    }

  ngOnInit(){
  }

 
 moveToFinal(){
  // this.load()
  this.loggedInVendor = this.inituser.getVendorData();

  const terms:any={
    id:this.loggedInVendor.id,
    AgreeCheck:this.termcheck,
    Note:this.vendorterms.note,
    first_agree: this.loggedInVendor.first_agree,
    sec_agree: this.loggedInVendor.sec_agree,
    effective_Date: this.effective_Date ? this.effective_Date : null,
    decision_Date: this.decision_Date ? this.decision_Date : null,
    login_level:'8',
    completed: true,
  }
  // if(this.loggedInVendor.first_agree === true && this.loggedInVendor.sec_agree ===true){
    this.firestore.update('vendorAdd',terms.id,terms).then(res=>{
      console.log(res)
      this.router.navigate(['pages/final-submission']);
    })
  // }
 }

//  sendVendorEmail(){
//   // const email = new email.send()
//   Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "lilypackiyam@gmail.com",
//       Password : "0527721E803854F2C924B66A3BAEAE2A03B2",
//       // To : document.getElementById('requestEmail').value,
//       To : this.loggedInVendor.requestEmail,
//       From : 'lilypackiyam@gmail.com',
//       Subject : "This is the subject",
//       Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}
//                Link: 'https://vendorweb-f72c9.web.app/pages/login',
//                permanent Id : ${this.numberId},
//                password : ${this.loggedInVendor.Confirm_new_password}
//                `,
               
   
//   }).then(message =>{
//     alert('message sent')
//     console.log(message)
//   })
// }

//  load(){
//   var random_id = '';
//   // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var characters = '1234567890';
//   for(var i=0; i < 10; i++){
//     random_id += characters.charAt(Math.floor(Math.random() * characters.length)); 
//     this.numberId = random_id
//     console.log(this.numberId)
//   }
  
//   this.emailId = this.numberId+"@gmail.com"
//   // console.log(this.emailId)
//   const auth = getAuth()
//   const user = auth.currentUser
//   console.log(auth, this.emailId)
//   updateEmail(user, this.emailId).then(res =>{
//     console.log(res)
//     // this.router.navigate(['pages/vendor-profile'])
//   })
  
//  }
 

select(eve){
  if(eve.detail.checked === true){
    this.loggedInVendor.first_agree=eve.detail.checked;
    const currentDate = new Date();
    this.decision_Date = moment(currentDate).format('YYYY-MM-DD')
  }else{
    this.loggedInVendor.first_agree=false;
    const currentDate = new Date();
    this.effective_Date = moment(currentDate).format('YYYY-MM-DD')
  }
  console.log(eve, this.loggedInVendor.first_agree)
}
selects(evs){
  if(evs.detail.checked === true){
    this.loggedInVendor.sec_agree= evs.detail.checked
  }else{
    this.loggedInVendor.sec_agree=false
  }
  console.log(evs, this.loggedInVendor.sec_agree)
}


moveToBack(){
  this.router.navigate(['pages/tax-form'])
}

}
