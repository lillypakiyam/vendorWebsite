import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InituserService } from 'src/app/service/inituser.service';
import {updatePassword, getAuth, updateEmail} from 'firebase/auth'

@Component({
  selector: 'app-final-submission',
  templateUrl: './final-submission.page.html',
  styleUrls: ['./final-submission.page.scss'],
})
export class FinalSubmissionPage implements OnInit {

  
  constructor( private router: Router,
               private inituser: InituserService) { 
               }

  ngOnInit() {
  }
  moveToLog(){
    this.router.navigate(['/logout'])
  }

  

  

  Logout(){
    this.inituser.vendorLogout().then(logout =>{
      console.log('id:null', logout)
      this.router.navigate(['pages/logout']);
    })
    // this.router.navigate(['/logout'])
  }
}
