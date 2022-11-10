import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-level',
  templateUrl: './top-level.page.html',
  styleUrls: ['./top-level.page.scss'],
})
export class TopLevelPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToPurchase(){
    this.router.navigate(['admin/purchase-order'])
    // this.router.navigate(['/purchase-order']);
  }
  moveToInVendor(){
    this.router.navigate(['admin/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['admin/home'])
  }
  moveToAd(){
    this.router.navigate(['/admin/administrator-accounts']);
  }
  moveToActiveVendors(){
    this.router.navigate(['admin/active-vendor']);
  }
  moveToLoginLevel(){
    this.router.navigate(['/login-level']);
  }
  moveToEmergency(){
    this.router.navigate(['/emergency-action'])
  }
  moveToDeletedVendors(){
    this.router.navigate(['admin/deleted'])
  }

  moveToVendorinfo(){
    this.router.navigate(['admin/vendor-info'])
  }
}
