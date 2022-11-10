import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import * as moment from 'moment';
import { InituserService } from 'src/app/service/inituser.service';
import { async } from '@firebase/util';
import { AlertController, LoadingController } from '@ionic/angular';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-deletedvendor',
  templateUrl: './deletedvendor.page.html',
  styleUrls: ['./deletedvendor.page.scss'],
})
export class DeletedvendorPage implements OnInit {

  TodayDate:string;alertc:any;
  loggedInAdmin:any;
  public company={
    companyname:'',
    companyEmail:'',
    requestEmail:'',
  }
  constructor(private api: ApiService,
              private firestore: FirestoreService,
              private initUser:InituserService,
              private alert: AlertController,
              private loadCnt : LoadingController,
              private util: UtilService,
              private router: Router) { 
                const currentDate = new Date();
                this.TodayDate = moment(currentDate).format('YYYY-MM-DD')
                this.loggedInAdmin = this.initUser.getUserData();
                console.log(this.TodayDate)
    console.log(this.api.tempVendor)
    console.log(this.api.tempVendor.id)
    console.log(this.api.vendorInvite)
  }

  ngOnInit() {
  }

 async deleteVendors(){

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
           this.firestore.createWithvendor('deleteVendor', this.api.tempVendor.id,this.api.tempVendor).then(ress=>{
            console.log(ress)
           const dele:any ={
            delete_date : this.TodayDate,
            delete_name : this.loggedInAdmin.name,
           }
              this.firestore.update('deleteVendor',this.api.tempVendor.id, dele).then(use =>{
                console.log(use)
              })
      
            this.firestore.delete('vendorAdd', this.api.tempVendor.id).then(async use =>{
              console.log(use)
              this.loading()
              this.router.navigate(['admin/invitedvendors'])
              this.api.vendorInvite.filter((vend,index) =>{
                 if(vend.id === this.api.tempVendor.id){
                  this.api.vendorInvite.splice(index, 1)
                 }
              })
              // const toast =await this.api.createToasts('successfully deleted',false,'middle')
              // await toast.present()
            })
          })


         }
      }
    ); 
    await this.alertc.present(); 
  }

 async loading(){
   const load =await this.loadCnt.create({
    message: 'Deleting...',
    duration: 3000,
    spinner: 'circles',
   })
   load.present()
  }
  back(){
    this.router.navigate(['admin/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['admin/home'])
  }


  moveToAd(){
    this.router.navigate(['/admin/administrator-accounts']);
  }
  //  moveToPurchase(){
  // this.router.navigate(['admin/purchase-order']);
  // }
  // moveToTopLevel(){
  //   this.router.navigate(['admin/top-level'])
  // }
  // moveToVendorInfo(){
  //   this.router.navigate(['admin/vendor-info'])
  // }

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
    if('vendorinform' === data){
      this.router.navigate(['admin/vendor-info'])
    }
    if('invitedvendors' === data){
      this.router.navigate(['admin/invitedvendors'])
    }
    if('invited' === data){
      this.router.navigate(['admin/administrator-accounts'])
    }
  }


}
