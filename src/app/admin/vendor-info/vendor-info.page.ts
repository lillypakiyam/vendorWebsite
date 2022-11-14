import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.page.html',
  styleUrls: ['./vendor-info.page.scss'],
})
export class VendorInfoPage implements OnInit {

  vendorUser:any=[]
  vendorName:any
  vendorEmail:any;
  constructor(private router:Router,
    private navcntrl:NavController,
    private api: ApiService) { }

  ngOnInit() {
    this.getvenodrdetails();
  }


  getvenodrdetails(){
    // console.log(this.api.adminId)
    this.vendorUser=[]
    this.api.getallvendorAdd().subscribe(res=>{
      console.log('vendor',res);
      res.map(user=>{
      console.log('user name', user.name)
      this.vendorUser.push(user)
      // this.adminName= user.name
      // this.adminEmail= user.email

      })
      console.log('res',res, res.name)
      // this.adminUser.push(res)
    })
  }
  moveToAd(){
    this.router.navigate(['/admin/administrator-accounts'])
  }
  moveToInVendor(){
    this.router.navigate(['admin/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['admin/home'])
  }
  moveToAddVendor(){
    this.router.navigate(['admin/addvendor'])
  }
  moveToTopLevel(){
    this.router.navigate(['admin/top-level'])
  }
  moveToPurchase(){
    this.router.navigate(['admin/purchase-order'])
    // this.router.navigate(['/purchase-order'])
  }

  moveToLoginInfo(data){
// this.router.navigate(['admin/login-info'],{
//   queryParams:{
//     item:data
//   }
// });
this.navcntrl.navigateRoot('admin/login-info',{state:{item:data}});

  }

}
