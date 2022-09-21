import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
moveToFinal(){
  this.router.navigate(['/final-submission'])
}
moveToBack(){
  this.router.navigate(['/tax-form'])
}
}
