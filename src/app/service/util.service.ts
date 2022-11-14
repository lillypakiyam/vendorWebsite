import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular'
import { InituserService } from './inituser.service';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private navCtrl: NavController,
              private inituser: InituserService) { }

  goToNew(route) {
    this.navCtrl.navigateRoot(route);
  }

  goBack(route) {
    this.navCtrl.navigateBack(route);
  }

  goForward(route) {
    this.navCtrl.navigateForward(route);
  }

  Logout(){
    this.inituser.vendorLogout().then(logout =>{
      console.log('id:null', logout)
      this.goToNew('pages/logout');
    })
    // this.router.navigate(['/logout'])
  }
}
