import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.page.html',
  styleUrls: ['./addvendor.page.scss'],
})
export class AddvendorPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  moveToAd(){
    this.router.navigate(['/administrator-accounts'])
  }
  moveToInVendor(){
    this.router.navigate(['/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['/home'])
  }
}
