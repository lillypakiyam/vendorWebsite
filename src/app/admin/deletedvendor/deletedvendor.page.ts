import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-deletedvendor',
  templateUrl: './deletedvendor.page.html',
  styleUrls: ['./deletedvendor.page.scss'],
})
export class DeletedvendorPage implements OnInit {

  public company={
    companyname:'',
    companyEmail:'',
    requestEmail:'',
  }
  constructor(private api: ApiService,
              private router: Router) { 
    console.log(this.api.tempVendor)
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['admin/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['admin/home'])
  }
}
