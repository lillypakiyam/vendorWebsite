import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.page.html',
  styleUrls: ['./tax-form.page.scss'],
})
export class TaxFormPage implements OnInit {

 public browse=false
  constructor(private router:Router) { }

  ngOnInit() {
  }
  moveToTerms(){
    this.router.navigate(['/terms-conditions'])

  }
  moveToBack(){
    this.router.navigate(['/tax-record'])
  }

  select(eve){
    console.log(eve.detail)
    if(eve.detail.checked === true){
      this.browse= true
    }else{
      this.browse= false

    }
  }
}
