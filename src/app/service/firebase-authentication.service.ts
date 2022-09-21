import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {take} from 'rxjs/operators'
import {BehaviorSubject} from 'rxjs'
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

  public login(email: string, password: string): Promise<any> {
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
}
