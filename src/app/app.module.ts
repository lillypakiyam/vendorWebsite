import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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

// import { APP_INITIALIZER, NgModule } from '@angular/core';
@NgModule({
  declarations: [AppComponent, AdministorAccountsPage],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule,
     AngularFireModule.initializeApp(environment.Config),
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    // schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
    FirebaseAuthenticationService,],
  bootstrap: [AppComponent],
})
export class AppModule {}
