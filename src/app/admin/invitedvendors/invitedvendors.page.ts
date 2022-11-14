import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular'
import { ApiService } from 'src/app/service/api.service';
import { UtilService } from 'src/app/service/util.service';
import * as moment from 'moment';
@Component({
  selector: 'app-invitedvendors',
  templateUrl: './invitedvendors.page.html',
  styleUrls: ['./invitedvendors.page.scss'],
})
export class InvitedvendorsPage implements OnInit {

  public vendorInvite:any;
  public vendordate:any=[];
  public vendorName:any=[];
  public vendorid:any=[];
  constructor(private router: Router,
              private util: UtilService,
              private api: ApiService,) { 
                this.api.getallVendor().subscribe(user =>{
                  console.log(user)
                  this.vendorInvite=user
                  this.vendorName.push(user)
                  console.log(this.vendorInvite)
                 })
              }

  ngOnInit() {
  }
  // moveToAd(){
  //   this.router.navigate(['/administrator-accounts'])
  // }
  moveToInVendor(){
    this.router.navigate(['/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['/home'])
  }

  inviteAnother(){
    // this.router.navigate(['admin/addvendor'])
    this.util.goForward('admin/addvendor')
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
    if('vendorinform' === data){
      this.router.navigate(['admin/vendor-info'])
    }
    if('invitedvendors' === data){
      this.router.navigate(['admin/invitedvendors'])
    }
    if('invited' === data){
    this.router.navigate(['admin/administrator-accounts']);
    }
  }

  searchbyDate(date, tdate){
    // this.today = moment().format('ll');
    this.vendordate=[];
    console.log(date, tdate)
    if(date !== undefined && tdate !== undefined){
      this.api.getSearchDate(date, tdate).subscribe(user =>{
    console.log(user,'use')
      this.vendordate.push(user)

      this.vendorInvite= this.vendordate
   
     console.log(this.vendorInvite, this.vendordate.length)
    })

   }else{
    this.api.getallVendor().subscribe(user =>{
      console.log(user)
      this.vendorInvite=user
      console.log(this.vendorInvite, this.vendorInvite.length)
     })
    }
  }

  searchElement(eve){
    // console.log(eve, eve.srcElement.value)
    this.vendorName.forEach(res =>{
          res.map(data =>
        {
          this.vendorid.push(data.companyname)
          console.log(this.vendorid)
          console.log(data.companyname.toLowerCase().indexOf(eve.srcElement.value.toLowerCase())>-1)
        })
      // return res.toLowerCase().indexOf(eve.srcElement.value.toLowerCase()) > -1;
    })  
  }

  vendorinfo(data){
  console.log(data)
  this.api.tempVendor = data
  this.router.navigate(['admin/deletedvendor']);
}
}
