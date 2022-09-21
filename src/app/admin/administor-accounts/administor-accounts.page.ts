import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-administor-accounts',
  templateUrl: './administor-accounts.page.html',
  styleUrls: ['./administor-accounts.page.scss'],
})
export class AdministorAccountsPage implements OnInit {

  adminUser:any=[]
  adminName:any
  adminEmail:any
  constructor(private router: Router,
              private api : ApiService) { 
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

  moveTolog(){
    this.router.navigate(['admin/login']);
  }
}
