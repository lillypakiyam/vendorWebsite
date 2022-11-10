import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InituserService } from 'src/app/service/inituser.service';

@Component({
  selector: 'app-tax-record',
  templateUrl: './tax-record.page.html',
  styleUrls: ['./tax-record.page.scss'],
})
export class TaxRecordPage implements OnInit {

  loggedinVendor:any;
  tax_inform:any=[];

  constructor( private router:Router,
               private inituser: InituserService,) { }

  ngOnInit() {
    this.loggedinVendor = this.inituser.getVendorData()
    console.log(this.loggedinVendor)
    console.log(this.loggedinVendor.tax_Details.Tax_number_type)
    this.tax_inform.push(this.loggedinVendor.tax_Details)
    this.tax_inform= this.loggedinVendor.tax_Details
  }
  moveToBack(){
    this.router.navigate(['pages/tax-details']);
  }
  moveToTaxForm(){
    this.router.navigate(['pages/tax-form']);
  }
}
