import { Component, OnInit } from '@angular/core';
import { InituserService } from 'src/app/service/inituser.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.page.html',
  styleUrls: ['./login-information.page.scss'],
})
export class LoginInformationPage implements OnInit {

  public loggedInVendor:any;
  constructor(private inituser: InituserService,
              private util: UtilService) { 
       this.loggedInVendor = this.inituser.getVendorData();
       console.log(this.loggedInVendor)
  }

  ngOnInit() {
  }

}
