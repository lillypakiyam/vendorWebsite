import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular'
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private navCtrl: NavController) { }

  goToNew(route) {
    this.navCtrl.navigateRoot(route);
  }

  goBack(route) {
    this.navCtrl.navigateBack(route);
  }

  goForward(route) {
    this.navCtrl.navigateForward(route);
  }
}
