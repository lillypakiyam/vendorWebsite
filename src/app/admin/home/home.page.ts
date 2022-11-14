import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service'
import {ApiService} from 'src/app/service/api.service'
import { InituserService } from 'src/app/service/inituser.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router:Router,
              private inituser:InituserService, 
               public api: ApiService) { 
                console.log(this.api.loginUserId)
               }

  ngOnInit() {
  }
  moveToAd(){
    this.router.navigate(['/admin/administrator-accounts']);
  }

  moveTo(){
    this.router.navigate(['admin/login']);
  }
  logout(){
    this.inituser.logout().then(logout =>{
      console.log('id:null', logout)
      this.router.navigate(['admin/login']);
    })
    // this.api.logout().then(res=>{
    //   console.log('id:null', res)
    //   this.router.navigate(['admin/login']);
    // })
  }

  topnav(){
    this.router.navigate(['admin/top-level'])

  }
  vendornav(){
    this.router.navigate(['admin/vendor-info'])

  }
  inviteNav(){
    this.router.navigate(['admin/invitedvendors'])
  }
  purchase(){
    this.router.navigate(['admin/purchase-order'])
  }
}
