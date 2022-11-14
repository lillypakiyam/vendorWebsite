import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-vendor-id',
  templateUrl: './forget-vendor-id.page.html',
  styleUrls: ['./forget-vendor-id.page.scss'],
})
export class ForgetVendorIDPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['pages/login'])

  }
}
