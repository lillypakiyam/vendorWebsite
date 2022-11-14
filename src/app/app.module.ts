import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {FirebaseAuthenticationService} from './service/firebase-authentication.service'
import { AngularFireModule } from '@angular/fire/compat';
import {environment} from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import {AdministorAccountsPage} from 'src/app/admin/administor-accounts/administor-accounts.page'
import {TaxRecordPage} from 'src/app/pages/tax-record/tax-record.page'
import { HttpClientModule} from '@angular/common/http';
import {ApiService} from 'src/app/service/api.service';
import {InituserService } from './service/inituser.service';
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage-angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx'
// import {File} from '@awesome-cordova-plugins/file/ngx'
// import {} from
// import { APP_INITIALIZER, NgModule } from '@angular/core';
@NgModule({
  declarations: [AppComponent, AdministorAccountsPage,],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule,HttpClientModule,
    IonicStorageModule.forRoot({ name: 'admindb' }),
     AngularFireModule.initializeApp(environment.Config),
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    // schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ApiService, InituserService,FileTransfer,File, FileOpener,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
    FirebaseAuthenticationService,
    {provide: APP_INITIALIZER, useFactory: InituserServiceFactory, deps: [InituserService], multi: true},
    {provide: APP_INITIALIZER, useFactory: inituserservicevendorFactory, deps: [InituserService], multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function InituserServiceFactory(provider:InituserService){
  return () => provider.load()
}

export function inituserservicevendorFactory(provider: InituserService){
  return () => provider.Vendorload()
}
