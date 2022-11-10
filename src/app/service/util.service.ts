import { Injectable } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular'
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private navCtrl: NavController,
              private alert: AlertController) { }

  goToNew(route) {
    this.navCtrl.navigateRoot(route);
  }

  goBack(route) {
    this.navCtrl.navigateBack(route);
  }

  goForward(route) {
    this.navCtrl.navigateForward(route);
  }

  async createAlert(header, backdropDismiss, message, buttonOptions1, buttonOptions2?): Promise<HTMLIonAlertElement>{
    const alert = await this.alert.create({
      header,
      backdropDismiss,
      message,
      buttons: !buttonOptions2 ? [buttonOptions1] : [buttonOptions1, buttonOptions2]
    }); 
    return alert;
  }
}
