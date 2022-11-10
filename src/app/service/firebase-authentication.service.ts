import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {take} from 'rxjs/operators'
import {BehaviorSubject} from 'rxjs'
// import { resolve } from 'dns';
// import { rejects } from 'assert';
// import * as firebase from 'firebase/compat';
// @Injectable({
//   providedIn: 'root'
// })
export class AuthInfo {
  constructor(public $uid: string) { }

  isLoggedIn() {
    return !!this.$uid;
  }
}

@Injectable()

export class FirebaseAuthenticationService {
  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(FirebaseAuthenticationService.UNKNOWN_USER);

  constructor(private fireauth: AngularFireAuth,
              ) {

    this.fireauth.authState.pipe(take(1)).subscribe(user => {
      if (user) {
        this.authInfo$.next(new AuthInfo(user.uid));
      }
    });
   }

  
  public createAccount(email: string, password: string): Promise<any> {
    return new Promise<any>((resolved, rejected) => {
      this.fireauth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            console.log(res.user)
            resolved(res.user);
          } else {
            rejected(res);
          }
        })
        .catch(err => {
          rejected(err);
        });
    });
  }

  public logout(): Promise<void> {
    this.authInfo$.next(FirebaseAuthenticationService.UNKNOWN_USER);
    return this.fireauth.signOut();
  }

  public login(email: string, password: string): Promise<any>{
    return new Promise<any>((resolved, rejected) => {
      this.fireauth.signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            resolved(res.user);
          }
        })
        .catch(err => {
          rejected(err);
        });
    });
  }

  public forgotPassoword(email: string) {
    return new Promise((resolve, rejected) =>{
      this.fireauth.sendPasswordResetEmail(email).then((pass) => {
        // console.log('pass',pass)
        resolve(pass)
        // alert(pass)
        alert("Password reset Link sent to your email, please your email")
      }).catch(err =>{
        rejected(err)
      })
  })
    // .catch(err => this.util.presentToast(`${err}`, true, 'bottom', 2100));
  }

  public passEmail(code, password): Promise<any> {
    return new Promise((resolve, rejected) =>{
      this.fireauth.confirmPasswordReset(code, password).then(res =>{
        // console.log(res)
        resolve(res)
      }).catch(err =>{
        rejected(err)
      })
    })
  }

  public verificationCode(email){
    var actionCodeSettings = {
      // After password reset, the user will be give the ability to go back
      // to this page.
      url: 'http://localhost:8100/pages/password-change',
      handleCodeInApp: true
    };
    this.fireauth.sendPasswordResetEmail(email, actionCodeSettings).then(res =>{
      console.log(res)
    })
  }
}
