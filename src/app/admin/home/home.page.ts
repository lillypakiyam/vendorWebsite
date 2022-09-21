import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service'
import {ApiService} from 'src/app/service/api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router:Router,
               public api: ApiService) { }

  ngOnInit() {
  }
  moveToAd(){
    this.router.navigate(['/admin/administrator-accounts']);
  }

  moveTo(){
    this.router.navigate(['admin/login']);
  }
  logout(){
    this.api.logout().then(res=>{
      console.log('id:null', res)
      this.router.navigate(['admin/login']);
    })
  }
  
}
