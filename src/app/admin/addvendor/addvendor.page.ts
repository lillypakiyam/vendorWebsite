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
import { FirestorageService } from 'src/app/service/firestorage.service';
import { LoadingController } from '@ionic/angular';
// import  './../../../assets/js/smtp.js ';
declare let Email: any;
@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.page.html',
  styleUrls: ['./addvendor.page.scss'],
})
export class AddvendorPage implements OnInit {

  files: File;
  filename: any;
  fileType: any;
  private loggedInVendor:Vendor;
  public documentUpload:string
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
              private loadCnt: LoadingController,
              private storageSer: FirestorageService,
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
        Username : "vendordeveloper22@gmail.com",
        Password : "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
        // To : document.getElementById('requestEmail').value,
        To : this.company.requestEmail,
        From : 'vendordeveloper22@gmail.com',
        Subject : "vendor account",
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
      invited_name: this.loggedInAdmin.name,
      login_level:null,
      delete_date:null,

      Current_password:null,
      New_password:null,
      Confirm_new_password:null,
      Address: null,
      Company_name: null,
      former_name: null,
      V_email:null,
      confim_email: null,
      street:null,
      country: null,
      house: null,
      street2:null,
      postal_code: null,
      city:null,
      po_postal:null,
      po_Box:null,
      district:null,
      region_state:null,
      ph_no:null,
      fax_no:null,

     // 2page
      first_name: null,
      last_name: null,
      relationship_type:null,
      contact_email:null,
      phone_no:null,
      faxno:null,
      
      Iban_country:null,
      iban:null,
      account:null,
      bank_code:null,
      bank_name:null,
      ibanStreet:null,    
      ibanCity:null,
      swift_bic:null ,    
      currency:null,
      document:null,
 
      Category:null,
      Subcategory:null,
 
     Tax_check:null,
     reason:null,
     Tax_number_type:null,
     Tax_number:null,
     tax_Details:[],
     Taxform_check:null,
     Formtype:null,
     Taxform_upload:null,
     SES_VSCform_upload:null,
 
     AgreeCheck:false,
     Note:null,
     first_agree: false,
     sec_agree: false,
     effective_Date: null,
     decision_Date: null,
     
     completed: false,
     approved: false,
     permenantId:null,

    invoiceUpload:this.documentUpload,
    invoicefileType:this.fileType,
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
        this.loading()
        // const toast = await this.api.createToasts('the vendor successfully added & email sent', false, 'top');
        // await toast.present();
        this.util.goForward('admin/invitedvendors')
        }, err => {
          console.log(err);
        });  

        this.util.goForward('admin/addvendor')
        this.NewPassword();
        
      }, async err =>{
    
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

  async loading(){
    const load =await this.loadCnt.create({
     message: 'Adding...',
     duration: 3000,
     spinner: 'circles',
    })
    load.present()
   }

   async uploading(){
    const load =await this.loadCnt.create({
     message: 'uploading...',
     duration: 3000,
     spinner: 'circles',
    })
    load.present()
   }
  uploadfile(event){
    console.log(event)
    this.files = event.target.files[0]
    console.log(this.files)
      this.uploading()
      console.log(event.target.files[0].name)
    console.log(event.target.files[0].type)
    const name = event.target.files[0].name;
    this.filename=name;
    this.fileType = event.target.files[0].type
    this.storageSer.uploadContent(this.files, name).then(async success => {
      // console.log('success', success);
      this.documentUpload = success.url
      console.log('success url', this.documentUpload);
   
    }).catch(async err => {
      console.log('err', err);
    });
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

