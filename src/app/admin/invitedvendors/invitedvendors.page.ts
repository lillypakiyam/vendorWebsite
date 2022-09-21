import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitedvendors',
  templateUrl: './invitedvendors.page.html',
  styleUrls: ['./invitedvendors.page.scss'],
})
export class InvitedvendorsPage implements OnInit {

  constructor(private router: Router) { }

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
