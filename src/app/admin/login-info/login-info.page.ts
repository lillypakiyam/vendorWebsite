import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import {updatePassword, getAuth, updateEmail} from 'firebase/auth'
import { FirestoreService } from 'src/app/service/firestore.service';
import { async } from '@firebase/util';
import { InituserService } from 'src/app/service/inituser.service';
import { FirestorageService } from 'src/app/service/firestorage.service';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { UtilService } from 'src/app/service/util.service';
declare let Email : any;

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.page.html',
  styleUrls: ['./login-info.page.scss'],
})
export class LoginInfoPage implements OnInit {

    private loggedinUser:any;
    public textarea = false;
  alertc:any;
  message:string;
   data:any;
   password:any;
   numberId:any;
   emailId:any;
   taxDetails:any=[];
  constructor(private router: Router,
              private api: ApiService,
              private initUser: InituserService,
              private authentication: FirebaseAuthenticationService,
              private firestore: FirestoreService,
              private alert: AlertController,
              private loadCnt: LoadingController,
              private util : UtilService,
              private fileOpener: FileOpener,
              private storage: FirestorageService,
              private Aroute: ActivatedRoute) { 
    // this.Aroute.queryParams.subscribe(()=>
    // {
      this.data = this.router.getCurrentNavigation().extras.state.item
      console.log(this.data)
   
    // })
    this.data['tax_Details'].forEach(tax =>{
      // console.log('details', tax);
      this.taxDetails.push( tax)
    })
    console.log('details', this.taxDetails);
    console.log('details', this.data);
    this.password = this.data.Confirm_new_password !== null? this.data.Confirm_new_password : this.data.temprory_password
    // console.log('details', this.data['tax_Details']);

         this.loggedinUser = this.initUser.getUserData();
                console.log(this.loggedinUser)
              
  }

  ngOnInit(){
  }

 async showtextarea(){
    if(this.loggedinUser.manageAdmin === 'Y'){
    this.textarea = !this.textarea;
    }else{
      const toast = await this.api.createToast('you are not allowed', false, 'middle')
      await toast.present()
    }
  }

  sendVendorEmail(){
    // const email = new email.send()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vendordeveloper22@gmail.com",
        Password : "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
        // To : document.getElementById('requestEmail').value,
        To : this.data.requestEmail,
        From : 'vendordeveloper22@gmail.com',
        Subject : "vendor account",
        Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 temprory Id : ${this.data.temporaryId},
                 password : ${this.password}
                 description: ${this.message}
                 `,
                 
    }).then(message =>{
      // alert('message sent')
      this.loading()
      console.log(message)
      this.textarea =false
      // this.router.navigate(['admin/vendor-info'])
    })
  }

  sendCompletion(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "vendordeveloper22@gmail.com",
      Password : "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
      // To : document.getElementById('requestEmail').value,
      To : this.data.requestEmail,
      From : 'vendordeveloper22@gmail.com',
      Subject : "Reminder message!!",
      Body : `please complete your remaining steps
               Link: 'https://vendorweb-f72c9.web.app/pages/login',
               temprory Id : ${this.data.temporaryId},
               password : ${this.password}
               `,
               
  }).then(message =>{
    // alert('message sent')
    this.loading()
    console.log(message)
    // this.textarea =false
    // this.router.navigate(['admin/vendor-info'])
  })
  }

  async approveDetail(){
    console.log(this.password)
   this.alertc = await this.util.createAlert(
    '',
    false,
    `Do you want to approved?`,
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
         if(this.loggedinUser.manageAdmin === 'Y'){
          this.authentication.login(this.data.temporaryId+'@gmail.com', this.password).then(use =>{
          console.log(use)
          this.createPass()
        }).catch(async err =>{
          console.log(err)
          const toast=await this.api.createToast('already approved in this vendorId', false,"middle")
          await toast.present();
         })
        }else{
        const toast = await this.api.createToast('you are not allowed', false, 'middle')
        await toast.present()
       }
       }
    }
  ); 
  await this.alertc.present(); 
  }

  createPass(){
    var random_id = '';
  // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var characters = '1234567890';
  for(var i=0; i < 10; i++){
    random_id += characters.charAt(Math.floor(Math.random() * characters.length)); 
    this.numberId = random_id
    console.log(this.numberId)
  }
  this.emailId = this.numberId+"@gmail.com"

    const auth = getAuth()
    const user = auth.currentUser
    console.log(auth, user)
    updateEmail(user, this.emailId).then(async res =>{
      console.log(res)
      const permenant:any ={
        permenantId: this.numberId,
        approved: true,
      }
      // this.router.navigate(['pages/vendor-profile'])
      this.firestore.update('vendorAdd',this.data.id, permenant).then(data =>{
        console.log(data)
      })
      this.sendPermenantEmail();
      const toast=await this.api.createToasts('approved in this vendorId', false,"middle")
      await toast.present();

    }).catch(async err =>{
      console.log(err)
      const toast=await this.api.createToast('already approved in this vendorId', false,"middle")
      await toast.present();

    })
  }

  async loading(){
    const load =await this.loadCnt.create({
     message: 'Message sending...',
     duration: 3000,
     spinner: 'circles',
    })
    load.present()
   }

  sendPermenantEmail(){
    // const email = new email.send()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vendordeveloper22@gmail.com",
        Password : "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
        // To : document.getElementById('requestEmail').value,
        To : this.data.requestEmail,
        From : 'vendordeveloper22@gmail.com',
        Subject : "vendor account",
        Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 permanent Id : ${this.numberId},
                 password : ${this.password}
                 `,
    }).then(message =>{
      alert('message sent')
      console.log(message)
      this.router.navigate(['admin/vendor-info'])
    })
  }

  Downloadbank(data){
    console.log(data)
    window.open(data.document)
  }

  DownloadTax(data){
    console.log(data)
    window.open(data.Taxform_upload)
  }

  DownloadSes(data){
    console.log(data)
    window.open(data.SES_VSCform_upload)
  }

  backVendor(){
    this.router.navigate(['admin/vendor-info'])
  }

}
