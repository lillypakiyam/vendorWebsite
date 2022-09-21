import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-submission',
  templateUrl: './final-submission.page.html',
  styleUrls: ['./final-submission.page.scss'],
})
export class FinalSubmissionPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  moveToLog(){
    this.router.navigate(['/logout'])
  }
}
