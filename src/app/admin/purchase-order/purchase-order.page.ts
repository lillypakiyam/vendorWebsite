import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.page.html',
  styleUrls: ['./purchase-order.page.scss'],
})
export class PurchaseOrderPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  inviteNav(data){
    if('home' === data){
    this.router.navigate(['admin/home'])
    }
    if('toplevel' === data){
      this.router.navigate(['admin/top-level'])
    }
    if('purchase' === data){
      this.router.navigate(['admin/purchase-order'])
    }
    if('vendorinfo' === data){
      this.router.navigate(['admin/vendor-info'])
    }
    if('invitedvendors' === data){
      this.router.navigate(['admin/invitedvendors'])
    }
    if('invited' === data){
      this.router.navigate(['admin/administrator-accounts'])
    }
  }
}
