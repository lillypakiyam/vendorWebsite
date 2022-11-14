import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.page.html',
  styleUrls: ['./login-info.page.scss'],
})
export class LoginInfoPage implements OnInit {

   data:any;
  constructor(private router: Router,
              private Aroute: ActivatedRoute) { 
    // this.Aroute.queryParams.subscribe(()=>
    // {
      this.data = this.router.getCurrentNavigation().extras.state.item
    // })
    console.log('details', this.data);
  }

  ngOnInit() {
  }

}
