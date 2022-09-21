import { Injectable } from '@angular/core';
import {FirebaseAuthenticationService} from 'src/app/service/firebase-authentication.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Observable, Subject} from 'rxjs'
import {take, takeUntil} from 'rxjs/operators'
import { FirestoreService } from './firestore.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public adminId:string;
  public unSubscribe$ = new Subject();
  constructor(private fireAuth:FirebaseAuthenticationService,
              private auth: AngularFireAuth,
              private firestore : FirestoreService) { }

  logout() {
    return this.fireAuth.logout();
  }

  signUp(admin): Observable<any> {
    
    const adminInfo = {
      'id' :  null,
      'name' : `${admin['name']}`,
      'email' : `${admin['email']}`,
      'username' : `${admin['email']}`,
      'phoneno' : `${admin['phone']}`,
      'password' : `${admin['password']}`
    };

    return new Observable((observer) => {
      this.fireAuth.createAccount(admin['email'], admin['password'])
      .then(user => {
        console.log(user);
        adminInfo.id = user.uid;
        this.firestore.createWithId('admin', adminInfo).then(usr => {
          console.log(usr);
          observer.next(adminInfo);
        }, err => {
          observer.error(err);
        });
      }).catch(err => {
        observer.error(err);
      });
    });
  }

  getoneAdmin(adminId): Observable<any> {
    return this.addIdToObject(adminId, this.firestore.getOne('admin', adminId));
  }

  getallAdmin(): Observable<any>{
    return this.firestore.findAlldr('admin')
  }


  addIdToObject(id, obj: Observable<any>) {
    return new Observable((observer) => {
      obj
        .pipe(takeUntil(this.unSubscribe$)).subscribe(ref => {
          const newObj = ref;
          if (newObj) {
            newObj.id = id;
          }
          observer.next(newObj);
        }, err => {
          observer.error(err);
        });
    });
  }
}
